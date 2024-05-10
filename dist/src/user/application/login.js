export class LoginUser {
    constructor(userRepository, hash, jwt) {
        this.userRepository = userRepository;
        this.hash = hash;
        this.jwt = jwt;
    }
    async run(email, password) {
        const user = await this.userRepository.find(email);
        if (!user)
            throw new Error('User not found');
        const isValid = this.hash.compare(password, user.password);
        if (!isValid)
            throw new Error('Invalid password');
        const token = await this.jwt.sign(user.id);
        user.setToken(token);
        return user;
    }
}
