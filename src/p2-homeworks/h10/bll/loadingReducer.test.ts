import {InitStateType, loadingAC, loadingReducer} from "./loadingReducer";

test("check changing loading", () => {
    const startState: InitStateType = {
        loading: false
    }

    const endState = loadingReducer(startState, loadingAC(true))

    expect(endState.loading).toBe(true)
})