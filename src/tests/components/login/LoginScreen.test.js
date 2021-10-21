import { mount } from "enzyme";
import { AuthContext } from "../../../auth/AuthContext";
import { LoginScreen } from "../../../components/login/LoginScreen";
import { types } from "../../../types/types";

describe("Name of the group", () => {
  const history = {
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

  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <LoginScreen history={history} />
    </AuthContext.Provider>
  );


  Storage.prototype.getItem = jest.fn();

  

  test("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de realizar el dispatch y la navegación", () => {
    const handleClick = wrapper.find("button").prop("onClick");

    handleClick()
    expect(contextValue.dispatch).toHaveBeenCalledTimes(1);
    expect(contextValue.dispatch).toHaveBeenCalledWith({
      type: types.login,
      payload: {
        name: "Ismael",
      },
    });
    expect(history.replace).toHaveBeenCalledTimes(1);
    expect(history.replace).toHaveBeenCalledWith("/");

  });

  // test('OK', () => {

  //   const wrapper = mount(
  //       <AuthContext.Provider value={contextValue}>
  //         <LoginScreen history={history} />
  //       </AuthContext.Provider>
  //     );

  //   const handleClick = wrapper.find("button").prop("onClick");
  //   localStorage.setItem('lastPath', '/dc');
    
  //   handleClick()
  //   // expect(history.replace).toHaveBeenCalledWith("dc");
  // });
});





// test('dispatch and navigation',()=>{
//     const localStorageMock = (function() {
//               var store = {};
//               return {
//                 getItem: function(key) {
//                   return store[key];
//                 },
//                 setItem: function(key, value) {
//                   store[key] = value.toString();
//                 },
//                 clear: function() {
//                   store = {};
//                 },
//                 removeItem: function(key) {
//                   delete store[key];
//                 }
//               };
//     })();
//     Object.defineProperty(window, 'localStorage', { value: localStorageMock });