import {InferSelectModel, sql} from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const transactions = sqliteTable("transactions", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  amount: integer("amount", { mode: "number" }).notNull(),
  timestamp: text("timestamp").default(sql`CURRENT_TIMESTAMP`),
  note: text("note", { mode: "text" }).notNull(),
  userId: text("userId", { mode: "text" }).notNull(),
  type: integer("type", { mode: "number" }).notNull(),
})

export type Transaction = InferSelectModel<typeof transactions>;