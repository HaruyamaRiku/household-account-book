export type TransactionType = "income" | "expense";
export type Transaction = {
  id: string;
  type: TransactionType;
  amount: number;
  category: string;
  date: string;
  memo?: string;
};
