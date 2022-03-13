import configureStore from 'redux-mock-store'
import thunk from "redux-thunk"

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initialState = {
    login: {
        id: "TESTING"
    }
}
let store = mockStore(initialState)

describe("pruebas con las acciones taks ", () => {

    beforeEach(() => {
        store = mockStore(initialState)
    })
})

test("crear tareas ", async () => {
    await store.dispatch(TaskNew({
        url: "123",
        nombre: "123",
        description: "123"
    }))

    const actions = store.getActions()
})