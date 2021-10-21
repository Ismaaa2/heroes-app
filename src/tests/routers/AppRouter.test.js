import { mount } from "enzyme";
import { AuthContext } from "../../auth/AuthContext";
import { AppRouter } from "../../routers/AppRouter";



describe('<AppRouter />', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    }

    
    test('debe de mostar el login si no esta autenticado', () => {    


        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        );

        expect(wrapper.find('h1').text().trim()).toBe('Login')
        
    });

    test('debe de mostrar el componente de marvel si esta autentificado', () => {

        const contextValue = {
            dispatch: jest.fn(),
            user: {
                logged: true,
                name: 'Ismael'
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        );

        expect(wrapper.find('Navbar').exists()).toBe(true)
        expect(wrapper.find('.navbar').exists()).toBe(true)

    });
    
});