import {InferSelectModel } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const transactions = sqliteTable("transactions", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  amount: integer("amount", { mode: "number" }).notNull(),
  date: text("date", { mode: "text" }).notNull(),
  note: text("note", { mode: "text" }).notNull(),
  userId: integer("userId", { mode: "number" }).notNull(),
  type: integer("type", { mode: "number" }).notNull(),
})

export type Transaction = InferSelectModel<typeof transactions>;