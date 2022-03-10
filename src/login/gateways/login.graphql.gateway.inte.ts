import { LoginGateway } from './login.gateway.interface'
import { GraphqlLoginGateway } from './login.graphql.gateway'
import {
  deletePipe,
  initializeIntegrationTestEnvironment,
  startServer,
} from '../../tests/initializeIntegrationTestEnvironment'


describe('Login Gateway', () => {
  jest.setTimeout(10000)
  let loginGateway: LoginGateway

  beforeAll(async () => {
    await startServer()
    loginGateway = new GraphqlLoginGateway()
  })

  beforeEach(async () => {
    await initializeIntegrationTestEnvironment()
  })

  afterAll(() => {
    deletePipe()
  })

  it('should return token', async () => {
    const payload = { email: 'Shaniya46@hotmail.com', password: 'qwerty' }
    const expectedToken = expect.any(String)

    const retrievedToken = await loginGateway.login(payload)

    expect(retrievedToken).toStrictEqual(expectedToken)
  })
})
