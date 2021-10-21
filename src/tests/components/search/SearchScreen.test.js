import { mount } from "enzyme";
import { act } from "react-dom/test-utils";
import { MemoryRouter, Route } from "react-router";
import { SearchScreen } from "../../../components/search/SearchScreen";

describe("<SearchScreen />", () => {


  test("debe de mostrarse correctamente con valores por defecto", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search"]}>
        <Route path="/search" component={SearchScreen} />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".error-no-data").exists()).toBe(true);
    expect(wrapper.find(".error-no-data").text().trim()).toBe("No hay data");
  });

  test("simular ruta con argumento en url", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search?q=batman"]}>
        <Route path="/search" component={SearchScreen} />
      </MemoryRouter>
    );

    expect(wrapper.find("input").prop("value")).toBe("batman");
    expect(wrapper.find(".card-heroe-one").exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostar un error si no se encuentra el heroe", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search?q=batmanadas"]}>
        <Route path="/search" component={SearchScreen} />
      </MemoryRouter>
    );

    expect(wrapper.find(".error-no-data").exists()).toBe(true);
    expect(wrapper.find(".error-no-data").text().trim()).toBe("No hay data");
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de llamar el push del history", () => {

    const history = {
      push: jest.fn(),
    };

    const wrapper = mount(
      <MemoryRouter initialEntries={["/search"]}>
        <Route
          path="/search"
          component={() => <SearchScreen history={history} />}
        />
      </MemoryRouter>
    );

    wrapper.find('input').simulate('change', {
        target : {
            value: 'green',
            name: 'search'
        }
    });

    act( () => {
        wrapper.find('form').prop('onSubmit')({
            preventDefault(){}
        });
    } )

    expect(history.push).toHaveBeenCalledTimes(1)
    expect(history.push).toHaveBeenCalledWith('?q=green')

  });
});
