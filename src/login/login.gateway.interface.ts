import { Login } from '../create-program/entities/login.entity'

export interface LoginGateway {
  login(payload: Login): Promise<string>
}