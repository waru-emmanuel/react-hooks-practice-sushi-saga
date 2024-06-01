import React, { useState } from "react";

function CustomerWallet({ addMoney }) {
  const [amount, setAmount] = useState("");

  const handleChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const amountToAdd = parseFloat(amount);
    if (!isNaN(amountToAdd) && amountToAdd > 0) { // one cannot add 0 amount
      addMoney(amountToAdd);
      setAmount("");
    } else {
      alert("Please enter a valid amount.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Add Money: $
        <input
          type="text"
          value={amount}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add</button>
    </form>
  );
}

export default CustomerWallet;
