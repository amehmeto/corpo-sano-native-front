import axios from 'axios'

export class GraphQLGateway {
  protected readonly port = '3005'
  // TODO: utiliser les variables d'environnements dès que possible. Issue Jest ouverte, bloqué pour l'instant
  protected readonly backendApi = 'localhost'
  // protected readonly backendApi = '51.159.164.130'
  protected readonly gatewayUrl = `http://${this.backendApi}:${this.port}/graphql`

  protected async request(queryPayload: {
    query: string
    variables?: object
  }): Promise<any> {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdGhsZXRlSWQiOiJlYmM2NzAyNy03NjMyLTQ5NjYtYWU1OS0zOTBkYmExMzZhNmMiLCJpYXQiOjE2NDYzODI4NDIsImV4cCI6MTY0NjM4NjQ0Mn0.m6zaABtzAtGxISajKY2c9DtAv2dLQ4JKqkBuvjl4184' //localStorage.getItem('authToken')

    const answer = (await axios.post(this.gatewayUrl, queryPayload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })) as any
    return answer.data.data
  }

  protected handleError(e: unknown) {
    throw new Error(`No response from the server: ${e}`)
  }
}
