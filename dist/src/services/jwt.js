import jwt from 'jsonwebtoken';
export class JWT {
    async sign(payload) {
        return jwt.sign({ data: payload }, 'secret', { expiresIn: '1h' });
    }
    verify(token) {
        return jwt.verify(token, 'secret');
    }
}
