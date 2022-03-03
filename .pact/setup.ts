const path = require('path')
const Pact = require('@pact-foundation/pact').Pact

export const pactPort = 8080
export const pactProvider = new Pact({
  cors: true,
  port: pactPort,
  log: path.resolve(process.cwd(), 'logs', 'pact.log'),
  loglevel: 'debug',
  dir: path.resolve(process.cwd(), 'pacts'),
  spec: 2,
  pactfileWriteMode: 'update',
  consumer: 'hero-consumer',
  provider: 'hero-provider',
  host: '127.0.0.1',
})
