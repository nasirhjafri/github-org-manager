import { call, put, takeLatest } from 'redux-saga/effects'

import * as actions from './actions'
import * as api from './api'


export function* loginUser(action) {
    try {
        const response = yield call(api.loginUser, action.payload)
        localStorage.setItem('access_token', response.data.access);
        localStorage.setItem('refresh_token', response.data.refresh);
        yield put({type: actions.LOGIN_USER_SUCCESS, data: response.data})
    } catch (e) {
        yield put({type: actions.LOGIN_USER_FAILED, error: e})
    }
}

export default function* campaignSaga() {
    yield takeLatest(actions.LOGIN_USER, loginUser)
}
