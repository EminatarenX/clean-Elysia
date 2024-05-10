import { Elysia } from 'elysia';
import { createUserController, loginController } from '../server/depenncies.js';
import { createUserDTO, loginUserDTO } from './domain/userDTO.js';
export const userRouter = new Elysia({ prefix: '/users' })
    .post('/', createUserController.run.bind(createUserController), createUserDTO)
    .post('/login', loginController.run.bind(loginController), loginUserDTO);
