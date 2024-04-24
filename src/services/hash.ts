import bcrypt from 'bcrypt'
import type { IHash } from './interfaces/IHash.js'

export class Hash implements IHash {
    hash(password: string) {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hash(password, salt)
    }

    compare(password: string, hash: string) {
        return bcrypt.compare(password, hash)
    }
}