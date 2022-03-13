import "@testing-library/jest-dom"
import { loginSincrono, logout } from "../../actions/actionLogin"
import { loginReducer } from "../../reducers/loginReducer"
import { types } from "../../types/types"

describe("Pruebas en LoginReducer", () => {
    test("debe de realizar el login", () => {

        const initState = {};
        const action = {
            type: types.login,
            payload: {
                id: "nose",
                displayname: "lordkitsune"
            }
        };
        const state = loginReducer(initState, action);
        expect(state).toEqual({
            id: "nose",
            name: "lordkitsune"
        })
    })

    test('Cerrar sesion - logout ', () => {
        const initState = {
            id: "nose",
            name: "lordkitsune"
        };

        const action = {
            type: types.logout,
        }

        const state = loginReducer(initState, action);
        expect(state).toEqual([])
    })

    test("State por default ", () => {
        const initState = {
            id: "nose",
            name: "lordkitsune"
        }

        const action = {
            type: types.Holi,
        }

        const state = loginReducer(initState, action)
        expect(state).toEqual(initState)
    })

    test("Verificar login sincronico ", () => {
        const id = "hhiuh"
        const displayname = "lordkitsune"

        const loginAction = loginSincrono(id, displayname)

        expect(loginAction).toEqual({
            type: types.login,
            payload: {
                id,
                displayname
            }
        })
    })

    test("Cerrar sesion ", () => {
        const id = "hhiuh"
        const displayname = "lordkitsune"

        const logoutAction = logout();

        expect( logoutAction ).toEqual({
            type: types.logout,
        })
    })

})