import { combineReducers } from 'redux'

import { reducer as login } from '../sagas/loginSaga/reducer'



const reducers = combineReducers({
    login
})

export default reducers
