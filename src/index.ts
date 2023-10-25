import { Elysia, t } from "elysia";
import { swagger } from '@elysiajs/swagger'
import { getTransaction, getTransactions, postTransaction } from "./controllers/transactionController";
import transactionSchema from "./model/transactionSchema";

const app = new Elysia()
  .use(swagger())
  .group("/api/v1", app => app 
    .get("/", () => "Hello Elysia")
    
    .group("/transactions", app => app
        .get("/:userId", getTransactions)
        .get("/:userId/:transactionId", getTransaction, )
        .post("/", postTransaction, {
          body: transactionSchema
        })

    )
    
  )
  
  .listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
