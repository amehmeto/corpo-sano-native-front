import { pactProvider } from './setup'

beforeAll((done) => {
  pactProvider.setup().then(() => done())
})

afterAll((done) => {
  pactProvider.finalize().then(() => done())
})
