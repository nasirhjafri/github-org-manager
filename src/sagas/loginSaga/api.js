import axios from '../../api'

export function loginUser(payload) {
    return axios.post('auth/login/', payload)
}