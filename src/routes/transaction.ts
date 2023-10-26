import { Elysia } from 'elysia'
import { getTransaction, getTransactions, postTransaction } from '../controllers/transactionController'
import transactionSchema from '../validator/transactionSchema'

export default new Elysia()
  .group('/transactions', app => app
    .get('/:userId', getTransactions)
    .get('/:userId/:transactionId', getTransaction)
    .post('/', postTransaction, {
      body: transactionSchema
    })
  )
