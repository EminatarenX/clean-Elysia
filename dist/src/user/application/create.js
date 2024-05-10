export class CreateUser {
    constructor(userRepository, hash) {
        this.userRepository = userRepository;
        this.hash = hash;
    }
    async run(email, password) {
        const hashedPassword = await this.hash.hash(password);
        return await this.userRepository.create(email, hashedPassword);
    }
}
