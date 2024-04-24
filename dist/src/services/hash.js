import bcrypt from 'bcrypt';
export class Hash {
    hash(password) {
        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hash(password, salt);
    }
    compare(password, hash) {
        return bcrypt.compare(password, hash);
    }
}
