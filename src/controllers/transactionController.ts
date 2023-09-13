import { db } from "../database";
import { transaction } from "../database/schema";

export const getTransactions = async () => {
    const transactions = await db.select().from(transaction).all();
    return transactions;
}