import {UserType} from "../HW8";

type ActionsType = SortUpActionType | Check18ActionType
type SortUpActionType = {
    type: 'sort', payload: 'up' | 'down'
}
type Check18ActionType = {
    type: 'check', payload: 18
}

export const homeWorkReducer = (state: UserType[], action: ActionsType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix
            const copyState = [...state]
            if (action.payload === 'up') {
                return copyState.sort(function (a,b) {
                    if (a.name > b.name) {
                        return 1
                    }
                    if (a.name < b.name) {
                        return -1
                    }
                    return 0
                })
            } else {
                return copyState.sort(function (a,b) {
                    if (a.name > b.name) {
                        return -1
                    }
                    if (a.name < b.name) {
                        return 1
                    }
                    return 0
                })
            }
        }

        case 'check': {
            // need to fix
            return state.filter(f => f.age > 18)
        }
        default: return state
    }
}