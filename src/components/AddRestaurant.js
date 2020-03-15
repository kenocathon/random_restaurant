import React from "react";

//exported to Options.js
export default class AddRestaurant extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddRestaurant = this.handleAddRestaurant.bind(this);
    this.state = {
      error: ""
    };
  }
  handleAddRestaurant(e) {
    e.preventDefault();
    const newRestaurant = e.target.elements.restaurant.value.trim();
    const error = this.props.handleAddRestaurant(newRestaurant);
    this.setState(() => ({ error }));
    e.target.elements.restaurant.value = "";
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddRestaurant}>
          <label>Guest: {this.props.guestCount}</label>
          <input type="text" name="restaurant" />
          <button>Add</button>
        </form>
      </div>
    );
  }
}
