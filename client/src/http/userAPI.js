import { $authHost, $host } from "./index";

export const registration = async (username, password) => {
    const response = await $host.post('api/user/registration', { username, password, role: 'ADMIN' })
    return response
}

export const login = async (username, password) => {
    const response = await $host.post('api/user/login', { username, password })
    return response
}

export const check = async () => {
    const response = await $authHost.post('api/user/auth',)
    return response
}