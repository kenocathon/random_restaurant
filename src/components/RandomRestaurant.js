import React from "react";

const RandomRestaurantPicker = props => {
  return (
    <div>
      <button
        onClick={props.handleRandomPick}
        disabled={!props.enablePickARestaurant}
      >
        Pick A Restaurant
      </button>
    </div>
  );
};

export default RandomRestaurantPicker;
