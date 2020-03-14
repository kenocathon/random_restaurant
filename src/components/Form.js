import React from "react";
import ProfileForm from "./ProfileForm";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleNumberOfGuests = this.handleNumberOfGuests.bind(this);
    this.state = {
      error: ""
    };
  }

  handleNumberOfGuests(event) {
    event.preventDefault();
    const numberOfGuests = Number.parseInt(
      event.target.elements.guests.value,
      10
    );
    let error = "";
    if (Number.isNaN(numberOfGuests)) {
      error = "Enter the number of guests that will be dining";
    } else if (numberOfGuests <= 0) {
      error = "The number of guests has to be positive.";
    } else if (numberOfGuests < this.props.currentGuestCount) {
      error = "Invalid settings. More people have signed up than the maximum.";
    } else {
      this.props.handleNumberOfGuests(numberOfGuests);
    }

    this.setState(() => {
      return { error };
    });
  }

  render() {
    return (
      <form onSubmit={this.handleNumberOfGuests}>
        <ProfileForm />
        <fieldset>
          {this.state.error && <p>{this.state.error}</p>}
          <legend>Settings</legend>
          <label>Number of guests</label>
          <input type="number" name="guests" />

          <input type="checkbox" name="randomCheck" />
          <label>Add a local restaurant to the list</label>
          <button>Submit</button>
        </fieldset>
      </form>
    );
  }
}
