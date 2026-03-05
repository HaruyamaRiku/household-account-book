import { useState } from "react";
import type { TransactionType } from "./types/transaction";

const App = () => {
  const [type, setType] = useState<TransactionType>("expense");
  const [amount, setAmount] = useState<number>(0);
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [memo, setMemo] = useState("");

  return (
    <>
      <h1 className="text-xl">家計簿アプリ</h1>

      <form>
        <div>
          <label>種類：</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value as TransactionType)}
          >
            <option value="expense">支出</option>
            <option value="income">収入</option>
          </select>
        </div>

        <div>
          <label>金額：</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>

        <div>
          <label>カテゴリ：</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <div>
          <label>日付：</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div>
          <label>メモ：</label>
          <input
            type="text"
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
          />
        </div>

        <button type="submit">追加</button>
      </form>
    </>
  );
};
export default App;
