import React from "react";
import Header from "./Header";
import Form from "./Form";
import RandomRestaurantPicker from "./RandomRestaurant";
import Options from "./Options";

//import "./index.css";
//import App from "./components/App";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleRandomPick = this.handleRandomPick.bind(this);
    this.handleAddRestaurant = this.handleAddRestaurant.bind(this);
    this.handleNumberOfGuests = this.handleNumberOfGuests.bind(this);
    this.state = {
      options: [],
      maxGuests: 4
    };
  }
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }

  handleRandomPick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert("You must go to " + option);
  }

  handleAddRestaurant(newRestaurant) {
    if (!newRestaurant) {
      return "Enter valid value to add a restaurant";
    } else if (this.state.options.indexOf(newRestaurant) > -1) {
      return "This restaurant already exists in the list";
    }

    this.setState(prevState => {
      return {
        options: prevState.options.concat(newRestaurant)
      };
    });
  }

  handleNumberOfGuests(numberOfGuests) {
    this.setState(() => {
      return {
        maxGuests: numberOfGuests
      };
    });
  }

  render() {
    const isMaxNumberOfGuestsReached =
      this.state.options.length === this.state.maxGuests;
    return (
      <div>
        <Header
          title="Random Restaurant"
          subtitle="Where will your next meal be?"
        />

        <p>Maximum number of guests: {this.state.maxGuests}</p>

        <Form
          handleNumberOfGuests={this.handleNumberOfGuests}
          maxGuests={this.state.maxGuests}
          currentGuestCount={this.state.options.length}
        />

        <Options
          options={this.state.options}
          handleAddRestaurant={this.handleAddRestaurant}
          handleDeleteOptions={this.handleDeleteOptions}
        />

        <RandomRestaurantPicker
          enablePickARestaurant={isMaxNumberOfGuestsReached}
          handleRandomPick={this.handleRandomPick}
        />
      </div>
    );
  }
}
