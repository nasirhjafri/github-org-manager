import { all, fork } from 'redux-saga/effects'

import loginSaga from './loginSaga/saga'


export default function* root() {
    yield all([loginSaga()])
}
