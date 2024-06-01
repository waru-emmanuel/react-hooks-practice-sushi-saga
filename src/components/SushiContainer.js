import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushiList, onEatSushi }) {
  const [sushiIndex, setSushiIndex] = useState(0);

  function handleMoreSushi() {
    setSushiIndex((prevIndex) => prevIndex + 4); // Load the next 4 sushi items
  }

  const displayedSushi = sushiList.slice(sushiIndex, sushiIndex + 4);

  return (
    <div className="belt">
      {displayedSushi.map((sushi) => (
        <Sushi key={sushi.id} sushi={sushi} onEatSushi={onEatSushi} />
      ))}
      {sushiIndex + 4 < sushiList.length && (
        <MoreButton onMoreSushi={handleMoreSushi} />
      )}
    </div>
  );
}

export default SushiContainer;
