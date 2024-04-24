import type { IJWT } from "./interfaces/IJWT.js";
import jwt from 'jsonwebtoken'

export class JWT implements IJWT {
    async sign(payload: string): Promise<string> {
        return jwt.sign({data: payload}, 'secret', { expiresIn: '1h'})
    }
    verify(token: string): string {
        return jwt.verify(token, 'secret') as string
    }
}