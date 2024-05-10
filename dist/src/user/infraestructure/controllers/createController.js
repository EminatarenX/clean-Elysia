export class CreateUserController {
    constructor(createUser) {
        this.createUser = createUser;
    }
    async run({ body }) {
        try {
            const user = await this.createUser.run(body.email, body.password);
            return {
                status: 200,
                data: user
            };
        }
        catch (e) {
            const error = e;
            return {
                status: 500,
                message: error.message
            };
        }
    }
}
