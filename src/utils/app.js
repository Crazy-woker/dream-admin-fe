import Cookie from "cookie_js"

const adminToken = "admin_token"

export function getToken() {
    return Cookie.get(adminToken)
}

export function setToken(token) {
    return Cookie.set(adminToken, token)
}

export function removeToken() {
    return Cookie.remove(adminToken)
}

export function setUserName(userName) {
    return Cookie.set("userName", userName)
}