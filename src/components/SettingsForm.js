import React from "react";
import { Link } from "react-router-dom";

export default class SettingsForm extends React.Component {
  state = {
    error: "",
    checked1: false, // Add local restaurant checkbox
    checked2: false // Add favorite restaurant checkbox
  };

  handleSubmitForm = event => {
    event.preventDefault();
    const numberOfGuests = Number.parseInt(
      event.target.elements.guests.value,
      10
    );
    let error = "";
    if (numberOfGuests <= 0) {
      error = "The number of guests has to be positive.";
    } else if (numberOfGuests < this.props.currentGuestCount) {
      error = "Invalid settings. More people have signed up than the maximum.";
    } else {
      this.props.handleSubmitForm(numberOfGuests);
    }

    this.props.AddToOptions1(this.state.checked1); // Calls function in App to add local restaurant to options []
    this.props.AddToOptions2(this.state.checked2); // Calls function in App to add fav restaurant to options [].

    this.setState(() => ({ error })); //If nothing is returned it will remain empty.
  };
  handleChangeCheckbox1 = event => {
    const checked = event.target.checked; // clicked action
    this.setState({ checked1: checked });
  };
  handleChangeCheckbox2 = event => {
    const checked = event.target.checked; // clicked action
    this.setState({ checked2: checked });
  };

  render() {
    return (
      <form
        style={this.props.visible ? { display: "block" } : { display: "none" }}
        className="container"
        onSubmit={this.handleSubmitForm}
      >
        <fieldset>
          {this.state.error && <p>{this.state.error}</p>}
          <legend>Settings</legend>
          <div className="formboxcolumn">
            <label htmlFor="guests">Number of guests</label>
            <input type="number" name="guests" required="required" />
          </div>
          <div className="formboxrow">
            <input
              type="checkbox"
              name="randomCheck"
              checked={this.state.checked1}
              onChange={e => this.handleChangeCheckbox1(event)}
            />
            <label htmlFor="randomCheck">
              Add a local restaurant to the list
            </label>
          </div>
          <div
            style={
              this.props.favRestaurant
                ? { display: "block" }
                : { display: "none" }
            }
            className="formboxrow"
          >
            <input
              type="checkbox"
              name="favRestaurant"
              checked={this.state.checked2}
              onChange={e => this.handleChangeCheckbox2(event)}
            />
            <label>Use your favorite restaurant as your choice</label>
          </div>
          <div className="formboxcolumn">
            <button>Submit</button>
          </div>
        </fieldset>
      </form>
    );
  }
}
