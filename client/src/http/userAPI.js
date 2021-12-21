import { $authHost, $host } from "./index";
import jwt_decoder from "jwt-decode";

export const registration = async (username, password) => {
    const { data } = await $host.post('api/user/registration', { username, password, role: 'USER' })
    localStorage.setItem('token', data.token)
    console.log(data)
    return jwt_decoder(data.token)
}

export const login = async (username, password) => {
    const { data } = await $host.post('api/user/login', { username, password })
    localStorage.setItem('token', data.token)

    return jwt_decoder(data.token)
}

export const check = async () => {
    const { data } = await $authHost.get('api/user/auth')
    localStorage.setItem('token', data.token)
    return jwt_decoder(data.token)
}