import { eq, and } from 'drizzle-orm'
import { db } from '../database'
import { Transaction, transactions } from '../database/schema'
import PostTransactionBody from '../entities/request/body/postTransactionBody'
import getTransactionParams from '../entities/request/params/getTransactionParams'
import getTransactionsByUserIdParams from '../entities/request/params/getTransactionsByUserIdParams'
import { NotFoundError } from 'elysia'


export const getTransactions = async ({ params }: { params: getTransactionsByUserIdParams }) => {
  const result : Transaction[] = await db.select().from(transactions).where(eq(transactions.userId, params.userId))
  if (result.length === 0) {
    throw new NotFoundError
  }
  return result
}

export const getTransaction = async ({ params }: { params: getTransactionParams }) => {
  const result : Transaction[]  = await db.select().from(transactions).where(
    and(
      eq(transactions.userId, params.userId),
      eq(transactions.id, Number(params.transactionId))
    )
  )
  if (result.length === 0) {
    throw new NotFoundError()
  }
  return result[0]
}

export const postTransaction = async ({ body }: { body: PostTransactionBody }) => {
  const result = await db.insert(transactions).values(body)
  if (result){
    return {
      message: 'Transaction created successfully'
    }
  }
}
