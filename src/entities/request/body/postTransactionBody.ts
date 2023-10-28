type PostTransactionBody = {
  userId: string
  amount: number
  note: string
  type: "INCOME" | "EXPENSE"
}

export default PostTransactionBody