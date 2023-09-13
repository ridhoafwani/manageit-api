import { Elysia } from "elysia";
import { swagger } from '@elysiajs/swagger'
import { getTransactions } from "./controllers/transactionController";

const app = new Elysia({ prefix: '/api' })
  .use(swagger())
  .group("/v1", app => app 
    .get("/", () => "Hello Elysia")
    
    .group("/transactions", app => app
        .get("/", getTransactions)
    )

    .group("/users", app => app
    )
    
  )
  
  .listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
