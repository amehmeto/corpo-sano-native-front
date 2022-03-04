import { GraphQLGateway } from '../_infrastructure/gateway/base.graphql.gateway'
import { LoginGateway } from './login.gateway.interface'
import { Login } from '../create-program/entities/login.entity'

export class LoginGraphqlGateway extends GraphQLGateway implements LoginGateway {
  async login(payload: Login): Promise<string> {
    const signInQuery = {
      query: `query SignIn($payload: AuthCredentialsInput!) {
        signIn(payload: $payload) {
          token
        }
      }`,
      variables: {
        payload,
      },
    }

    const { token } = await this.request(signInQuery)
    return token
  }
}