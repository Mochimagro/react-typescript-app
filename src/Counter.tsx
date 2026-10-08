import React, { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    (console.log(`カウントが ${count}に変更されました`), [count]);
  });

  // クリックイベントの型定義
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  // 入力イベントの型定義
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  return (
    <div style={{ padding: "16px", border: "1px solid #ddd" }}>
      <p>カウント : {count}</p>
      <button onClick={handleIncrement}>+1</button>
      <button onClick={handleDecrement}>-1</button>

      <div style={{ marginTop: "16px" }}>
        <input
          type="text"
          value={message}
          onChange={handleInputChange}
          placeholder="メッセージを入力"
        />
        <p>入力されたメッセージ {message}</p>
      </div>
    </div>
  );
}
