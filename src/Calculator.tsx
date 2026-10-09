import React, { useState } from "react";

export default function Caluculator() {
  const [firstNumber, setFirstNumber] = useState<number>(0);
  const [secondNumber, setSecondNumber] = useState<number>(0);
  const [result, setResult] = useState<number>(0);

  const handleFirstNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0;
    setFirstNumber(value);
  };

  const handleSecondNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0;
    setSecondNumber(value);
  };

  const handleCaluculate = () => {
    const caluculationResult = firstNumber + secondNumber;
    setResult(caluculationResult);
  };

  return (
    <div
      style={{
        padding: "40px",
        maxWidth: "300px",
        margin: "0 auto",
        fontFamily: "system-ui",
      }}
    >
      <h3 style={{ textAlign: "center", color: "#999" }}>簡易計算機</h3>
      <div
        style={{
          background: "#f8f8f8",
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "20px",
          textAlign: "center",
          fontSize: "24px",
        }}
      >
        {result}
      </div>
      <input
        type="number"
        value={firstNumber}
        onChange={handleFirstNumberChange}
        placeholder="最初の数値"
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "10px",
          border: "1px solid #ddd",
          borderRadius: "6px",
          fontSize: "16px",
        }}
      ></input>

      <div style={{ textAlign: "center", margin: "10px 0", fontSize: "18px" }}>
        +
      </div>
      <input
        type="number"
        value={secondNumber}
        onChange={handleSecondNumberChange}
        placeholder="2番目の数値"
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "20px",
          border: "1px solid #ddd",
          borderRadius: "6px",
          fontSize: "16px",
        }}
      ></input>

      <button
        onClick={handleCaluculate}
        style={{
          width: "100%",
          padding: "12px",
          backgroundColor: "#007aff",
          color: "white",
          border: "none",
          borderRadius: "6px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        計算する
      </button>
    </div>
  );
}
