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
    // const token = localStorage.getItem('authToken')

    const answer = (await axios.post(this.gatewayUrl, queryPayload, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdGhsZXRlSWQiOiJlYmM2NzAyNy03NjMyLTQ5NjYtYWU1OS0zOTBkYmExMzZhNmMiLCJpYXQiOjE2NDYzMjczNDksImV4cCI6MTY0NjMzMDk0OX0.WQIBSVXnSQi6KK8fazR-qDHVLE8q4qDNFwW4IJwarf8`,
      },
    })) as any
    return answer.data.data
  }

  protected handleError(e: unknown) {
    throw new Error(`No response from the server: ${e}`)
  }
}
