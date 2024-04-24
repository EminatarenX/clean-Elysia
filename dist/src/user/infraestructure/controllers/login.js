export class LoginController {
    constructor(loginUser) {
        this.loginUser = loginUser;
    }
    async run({ body }) {
        try {
            const user = await this.loginUser.run(body.email, body.password);
            return {
                code: 200,
                user,
                message: 'User logged in'
            };
        }
        catch (error) {
            const err = error;
            return {
                code: 400,
                message: err.message
            };
        }
    }
}
