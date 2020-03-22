import { call, put, takeLatest } from 'redux-saga/effects'

import * as actions from './actions'
import * as api from './api'


export function* fetchCampaigns() {
    try {
        const response = yield call(api.loginUser)
        yield put({type: actions.LOGIN_USER, data: response.data})
    } catch (e) {
        yield put({type: actions.LOGIN_USER_FAILED, error: e})
    }
}