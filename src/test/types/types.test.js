import '@testing-library/jest-dom'
import {types} from "../../types/types"

describe('Verificar types ', () =>{
    test('comparar objetos ', () =>{
        expect(types).toEqual({
            login: "login",
            register: "register",
            logout: "logout"

            // taksAddNew: "[taks] New taks",
            // taksActive: "[Taks] Active taks",
            // taksLoad: "[Taks] Load taks",
            // taksUpdate: "[Taks] Update taks",
            // taksDelete: "[Taks] Delete taks",
            // taksClear: "[Taks] Clear taks",
            // taksLogoutClean: "[Taks] Logout taks" 

        })
    })
})