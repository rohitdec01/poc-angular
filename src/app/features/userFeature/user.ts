export interface User {
    name: string,
    password: string,
    email: string,
    token: string,
    roles: Array<String>,
    id: number
}
