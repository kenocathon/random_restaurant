import React from "react";
import AddRestaurant from "./AddRestaurant";

const RandomRestaurantPicker = props => (
  <div
    className="container"
    style={props.visible ? { display: "block" } : { display: "none" }}
  >
    <AddRestaurant
      maxGuests={props.maxGuests}
      handleAddRestaurant={props.handleAddRestaurant}
      guestCount={props.options.length + 1}
    />
    <div>
      {props.options.map(option => (
        <p key={option}>{option}</p>
      ))}
      <button onClick={props.handleDeleteOptions}>Clear All</button>
    </div>
    <button
      onClick={props.handleRandomPick}
      disabled={!props.enablePickARestaurant}
    >
      Pick A Restaurant
    </button>
  </div>
);

export default RandomRestaurantPicker;
