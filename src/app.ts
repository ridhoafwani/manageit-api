import { Elysia } from 'elysia'
import { swagger } from '@elysiajs/swagger'
import transactionRoute from './routes/transaction'

export default new Elysia()
  .use(swagger())
  .group('/api/v1', app => app
    .get('/', () => 'Hello Elysia')
    .use(transactionRoute)

  )
