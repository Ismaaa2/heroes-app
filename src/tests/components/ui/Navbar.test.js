import { mount } from "enzyme";
import { MemoryRouter, Router } from "react-router";
import { AuthContext } from "../../../auth/AuthContext";
import { Navbar } from "../../../components/ui/NavBar";
import { types } from "../../../types/types";

describe("<Navbar />", () => {
  const mockHistory = {
    push: jest.fn(),
    replace: jest.fn(),
    location: {},
    listen: jest.fn(),
    createHref: jest.fn(),
  };

  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: true,
      name: "Ismael Bonilla",
    },
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <MemoryRouter>
        <Router history={mockHistory}>
          <Navbar />
        </Router>
      </MemoryRouter>
    </AuthContext.Provider>
  );
  test("debería mostrar el nombre en la Navbar", () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".text-info").text().trim()).toBe("Ismael Bonilla");
  });

  test("deberia de ejecutarse el logout del NavBar", () => {
    wrapper.find("button").simulate("click");

    expect(contextValue.dispatch).toHaveBeenCalledTimes(1);
    expect(contextValue.dispatch).toHaveBeenCalledWith({ type: types.logout });

    expect(mockHistory.replace).toHaveBeenCalledWith("/login");
  });
});
