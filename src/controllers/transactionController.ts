import { eq, and } from "drizzle-orm";
import { db } from "../database";
import { transactions } from "../database/schema";

interface GetTransactionParams {
    userId: string,
    transactionId: string;
}

interface GetTransactionsParams {
    userId: string,
}

interface PostTransactionBody {
    userId: string,
    amount: number,
    note: string,
    type: number
}

export const getTransactions = async ({params}: {params: GetTransactionsParams}) => {
    const result = await db.select().from(transactions).where(eq(transactions.userId, params.userId));
    return result;
}

export const getTransaction = async ({params}: {params: GetTransactionParams}) => {
    const result = await db.select().from(transactions).where(
        and(
            eq(transactions.userId, params.userId), 
            eq(transactions.id, Number(params.transactionId))
        )
    );
    return result;
}

export const postTransaction = async ({body, set}: {body: PostTransactionBody}) => {
    const result = await db.insert(body).into(transactions);
    set.status(201);
}
