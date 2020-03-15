import React from "react";
export default class SettingsForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.state = {
      error: "",
      checked1: false, // Add local restaurant checkbox
      checked2: false // Add favorite restaurant checkbox
    };
  }

  handleSubmitForm(event) {
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
      this.props.handleSubmitForm(numberOfGuests);
    }

    this.props.AddToOptions1(this.state.checked1); // Calls function in App to add local restaurant to options []
    this.props.AddToOptions2(this.state.checked2); // Calls function in App to add fav restaurant to options [].

    this.setState(() => ({ error })); //If nothing is returned it will remain empty.
  }
  handleChangeCheckbox1(event) {
    const checked = event.target.checked; // clicked action
    this.setState({ checked1: checked });
  }
  handleChangeCheckbox2(event) {
    const checked = event.target.checked; // clicked action
    this.setState({ checked2: checked });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmitForm}>
        <fieldset>
          {this.state.error && <p>{this.state.error}</p>}
          <legend>Settings</legend>

          <label htmlFor="guests">Number of guests</label>
          <input type="number" name="guests" />

          <input
            type="checkbox"
            name="randomCheck"
            checked={this.state.checked1}
            onChange={e => this.handleChangeCheckbox1(event)}
          />
          <label htmlFor="randomCheck">
            Add a local restaurant to the list
          </label>

          <input
            type="checkbox"
            name="favRestaurant"
            checked={this.state.checked2}
            onChange={e => this.handleChangeCheckbox2(event)}
            style={
              this.props.favRestaurant
                ? { display: "block" }
                : { display: "none" }
            }
          />
          <label
            style={
              this.props.favRestaurant
                ? { display: "block" }
                : { display: "none" }
            }
          >
            Use your favorite restaurant as your choice
          </label>

          <button>Submit</button>
        </fieldset>
      </form>
    );
  }
}
