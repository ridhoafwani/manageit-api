import { eq, and } from "drizzle-orm";
import { db } from "../database";
import { transactions } from "../database/schema";
import type transactionSchema from "../model/transactionSchema";
import {t} from "elysia"

type GetTransactionParams = {
    userId: string,
    transactionId: string;
}

type GetTransactionsParams = {
    userId: string,
}

type PostTransactionBody = {
    userId: string,
    amount: number,
    note: string,
    type: number
}

interface Set {
    status: number,
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

export const postTransaction = async ({body}: {body: PostTransactionBody}) => {
    const result = await db.insert(transactions).values(body);
    return result
}
