import { mount } from "enzyme";
import { MemoryRouter } from "react-router";
import { PrivateRoute } from "../../routers/PrivateRoutes";

describe("<PrivateRoute />", () => {
  const props = {
    location: {
      pathname: "/marvel",
    },
  };

  Storage.prototype.setItem = jest.fn();

  test("debe de mostrar el componente si esta autenticado y guardar localStorage", () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          isAuth={true}
          component={() => <span>Listo!</span>}
          {...props}
        />
      </MemoryRouter>
    );

    expect(wrapper.find("span").exists()).toBe(true);
    expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", "/marvel");
  });

  test("debe de bloquear el componente si no está autenticado", () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          isAuth={false}
          component={() => <span>Listo!</span>}
          {...props}
        />
      </MemoryRouter>
    );

    
    expect(wrapper.find("span").exists()).toBe(false);
    expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", "/marvel");
  });
});
