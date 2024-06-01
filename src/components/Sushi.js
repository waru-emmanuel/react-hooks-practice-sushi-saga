import React from "react";

function Sushi({ sushi, onEatSushi }) {
  const handleClick = () => {
    if (!sushi.eaten) {
      onEatSushi(sushi.id, sushi.price);
    }
  };

  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {sushi.eaten ? null : (
          <img src={sushi.img_url} alt={sushi.name} width="100%" />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
