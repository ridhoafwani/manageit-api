import { t } from 'elysia';
const transactionSchema = t.Object({
  userId: t.String(),
  amount: t.Number(),
  note: t.String(),
  type: t.Number(),
}, {
  description: 'Expected new transaction data',
});

export default transactionSchema