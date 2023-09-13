import { eq } from "drizzle-orm";
import { db } from "../database";
import { transactions } from "../database/schema";

interface TransactionParams {
  id: string;
}

export const getTransactions = async () => {
    const result = await db.select().from(transactions).all();
    return result;
}

export const getTransaction = async ({params}: {params: TransactionParams}) => {
    const result = await db.select().from(transactions).where(eq(transactions.id, Number(params.id)));
    return result;
}
