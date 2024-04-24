import { LoginUser } from "../../application/login.js";
type Login = {
    body: {
        email: string,
        password: string
    },
    token: string
}
export class LoginController {
    constructor(
        private loginUser: LoginUser
    ){}
    async run({body}: Login) {

        try {
            const user =  await this.loginUser.run(body.email, body.password);
            return {
                code: 200,
                user,
                message: 'User logged in'
            }
        } catch (error) {
            const err = error as Error
            return {
                code: 400,
                message: err.message
            }
        }
    }
}