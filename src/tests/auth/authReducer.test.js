import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";



describe('<authReducer />', () => {
    
    test('debe de retornar el estado por defecto', () => {


        const returnedAuthReducer = authReducer({ data: 'data', logged: false }, {});

        expect( returnedAuthReducer ).toEqual({data: 'data', logged: false})
        
    });

    test('debe de autenticar y colocar el name del usuario', () => {

        const action = {
            type: types.login,
            payload: {
                name: 'Ismael'
            }
        }

        const returnedAuthReducer = authReducer({ data: 'data', logged: false }, action);

        expect( returnedAuthReducer ).toEqual({
            name: 'Ismael',
            logged: true
        })
    });

    test('debe de borrar el name del usuario y logged en false', () => {
        
        const action = {
            type: types.logout,
            payload: {}
        }

        const returnedAuthReducer = authReducer({  name: 'Ismael', logged: true }, action);

        expect( returnedAuthReducer ).toEqual({ logged: false })
        
    });
    
});