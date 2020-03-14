import React from "react";
import AddRestaurant from "./AddRestaurant";

const Options = props => {
  return (
    <div>
      <AddRestaurant
        handleAddRestaurant={props.handleAddRestaurant}
        guestCount={props.options.length}
      />
      {props.options.map(option => (
        <p key={option}>{option}</p>
      ))}
      <button onClick={props.handleDeleteOptions}>Clear All</button>
    </div>
  );
};

export default Options;
