import axios from '../../api'

export function loginUser() {
    return axios.get('auth')
}