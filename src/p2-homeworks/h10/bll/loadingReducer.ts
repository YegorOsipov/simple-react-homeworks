export type InitStateType = typeof initState
const initState = {
    loading: false as boolean
}

export const loadingReducer = (state: InitStateType = initState, action: ReturnType<typeof loadingAC>): InitStateType => { // fix any
    switch (action.type) {
        case "LOADING": {
            return {...state, loading: action.value}
        }
        default: return state
    }
}

export const loadingAC = (value: boolean) => ({type: "LOADING", value} as const) // fix any