import * as action from './actions'


export const loginUser = (code) => ({
    type: action.LOGIN_USER,
    payload: {'code': code}
})

const ACTION_HANDLERS = {
    [action.LOGIN_USER]: state => ({...state}),
}
const defaultState = {
}

export const reducer = (state = defaultState, action) => {
    const handler = ACTION_HANDLERS[action.type]
    return handler ? handler(state, action) : state
}