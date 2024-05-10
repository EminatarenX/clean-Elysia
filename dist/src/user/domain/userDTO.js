import { t } from 'elysia';
export const createUserDTO = {
    body: t.Object({
        email: t.String(),
        password: t.String()
    })
};
export const loginUserDTO = {
    body: t.Object({
        email: t.String(),
        password: t.String()
    })
};
