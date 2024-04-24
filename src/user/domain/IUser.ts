import { User } from "./User.js";

export interface IUser {
    create(email: string, password: string): Promise<User>;
    find(email: string): Promise<User | null>;
}