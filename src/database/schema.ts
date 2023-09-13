import {InferSelectModel } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const transaction = sqliteTable("transaction", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  amount: integer("amount", { mode: "number" }).notNull(),
  date: text("date", { mode: "text" }).notNull(),
  note: text("note", { mode: "text" }).notNull(),
  userId: integer("userId", { mode: "number" }).notNull(),
  type: integer("type", { mode: "number" }).notNull(),
})

export const user = sqliteTable("user", {
    id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    name: text("name", { mode: "text" }).notNull(),
    email: text("email", { mode: "text" }).notNull(),
    password: text("password", { mode: "text" }).notNull(),
    photo: text("photo", { mode: "text" }).notNull(),
})


export type Todo = InferSelectModel<typeof transaction>;
export type user = InferSelectModel<typeof user>;