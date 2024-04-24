export class User {
    constructor(id, email, password, token) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.token = token;
    }
    setToken(token) {
        this.token = token;
    }
}
