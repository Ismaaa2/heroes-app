import { mount } from "enzyme";
import { MemoryRouter, Route } from "react-router";
import { HeroeScreen } from "../../../components/heroes/HeroeScreen";

describe("<HeroeScreen />", () => {
  const history = {
    length: 10,
    push: jest.fn(),
    goBack: jest.fn(),
  };

  test("debe mostrar el componente redirect si no hay argumentos en la URL", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/heroe"]}>
        <HeroeScreen history={history} />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("Redirect").exists()).toBe(true);
  });

  test("debe de mostrar un heroe si el parametro existe y si se encuentra", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/heroe/marvel-spider"]}>
        <Route path="/heroe/:heroeId" component={HeroeScreen} />
      </MemoryRouter>
    );

    expect(wrapper.find("h3").exists()).toBe(true);
  });

  test("debe de regresar a la pantalla anterior con push", () => {
    const history = {
      length: 1,
      push: jest.fn(),
      goBack: jest.fn(),
    };

    const wrapper = mount(
      <MemoryRouter initialEntries={["/heroe/marvel-spider"]}>
        <Route
          path="/heroe/:heroeId"
          component={() => <HeroeScreen history={history} />}
        />
      </MemoryRouter>
    );

    wrapper.find("button").prop("onClick")();

    expect(history.push).toHaveBeenCalledTimes(1);
    expect(history.push).toHaveBeenCalledWith("/");
  });

  test("debe de regresar a la pantalla anterior con goBack", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/heroe/marvel-spider"]}>
        <Route
          path="/heroe/:heroeId"
          component={() => <HeroeScreen history={history} />}
        />
      </MemoryRouter>
    );

    wrapper.find("button").prop("onClick")();

    expect(history.goBack).toHaveBeenCalledTimes(1);
  });

  test("debe de llamar al redirect si el hero no existe", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/heroe/marvel-spider232"]}>
        <Route
          path="/heroe/:heroeId"
          component={() => <HeroeScreen history={history} />}
        />
      </MemoryRouter>
    );

    expect(wrapper.text()).toBe('');
  });
});
