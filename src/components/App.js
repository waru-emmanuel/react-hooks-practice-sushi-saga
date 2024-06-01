import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import CustomerWallet from "./CustomerWallet";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushiList, setSushiList] = useState([]);
  const [money, setMoney] = useState(100); // Initial amount of money
  const [plates, setPlates] = useState([]); // Initial plates state

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setSushiList(data);
      });
  }, []);

  function handleEatSushi(id, price) {
    if (money >= price) {
      setSushiList((prevSushiList) =>
        prevSushiList.map((sushi) =>
          sushi.id === id ? { ...sushi, eaten: true } : sushi
        )
      );
      setPlates((prevPlates) => [...prevPlates, {}]);
      setMoney((prevMoney) => prevMoney - price); // Subtract price from prevMoney
    } else {
      alert("You don't have enough money!");
    }
  }

    function addMoney(amount){
      setMoney((prevMoney) => prevMoney + amount);
    }

  return (
    <div className="app">
      <SushiContainer sushiList={sushiList} onEatSushi={handleEatSushi} />
      <Table plates={plates} remainingMoney={money} />
      <CustomerWallet addMoney={addMoney} />
    </div>
  );
}

export default App;
