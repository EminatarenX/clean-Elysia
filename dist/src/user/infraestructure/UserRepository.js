import { User } from "../domain/User.js";
import { PrismaClient } from '@prisma/client';
export class UserRepository {
    constructor() {
        this.db = new PrismaClient();
    }
    async create(email, password) {
        const user = await this.db.user.create({
            data: {
                email,
                password
            }
        });
        return new User(user.id, user.email, user.password);
    }
    async find(email) {
        const user = await this.db.user.findUnique({
            where: {
                email
            }
        });
        if (!user) {
            return null;
        }
        return new User(user.id, user.email, user.password);
    }
}
