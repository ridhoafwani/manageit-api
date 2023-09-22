import { Elysia } from "elysia";
import { swagger } from '@elysiajs/swagger'
import { getTransaction, getTransactions } from "./controllers/transactionController";

const app = new Elysia()
  .use(swagger())
  .group("/api/v1", app => app 
    .get("/", () => "Hello Elysia")
    
    .group("/transactions", app => app
        .get("/", getTransactions)
        .get("/:id", getTransaction)
    )
    
  )
  
  .listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
