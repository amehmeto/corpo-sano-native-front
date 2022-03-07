import { LoginGateway } from './login.gateway.interface'
import { GraphqlLoginGateway } from './login.graphql.gateway'

describe('Login Gateway', () => {
  let loginGateway: LoginGateway

  beforeAll(() => {
    loginGateway = new GraphqlLoginGateway()
  })

  it('should return token', async () => {
      const payload = {email: 'Shaniya46@hotmail.com', password: 'qwerty'}
    const expectedToken = expect.any(String)

    const retrievedToken = await loginGateway.login(payload)

    expect(retrievedToken).toStrictEqual(expectedToken)
  })
})