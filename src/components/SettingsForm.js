import React from "react";
import { withRouter, Route } from "react-router-dom";

class SettingsForm extends React.Component {
  state = {
    error: "",
    guestCount: 4,
    localRestaurantChecked: false, // Add local restaurant checkbox
    favRestaurantChecked: false // Add favorite restaurant checkbox
  };

  handleSettingsForm = event => {
    event.preventDefault();
    const numberOfGuests = Number.parseInt(
      event.target.elements.guests.value,
      10
    );
    const error = this.props.handleSettingsForm(numberOfGuests); // error is returned from App.js hadleSettingForm method.

    this.props.addLocalToOptions(this.state.localRestaurantChecked); // Calls method in App.js to add local restaurant to options []
    this.props.addFavToOptions(this.state.favRestaurantChecked); // Calls method in App,js to add fav restaurant to options [].

    this.setState(() => ({
      error
    }));

    if (!error) {
      this.props.history.push("/app"); // If no error redirect to the app. AddRestaurant.js
    }
  };

  favoriteRestaurantChecked = event => {
    const checked = event.target.checked; // controlled checkbox
    this.setState({ favRestaurantChecked: checked });
  };

  localRestaurantChecked = event => {
    const checked = event.target.checked; // controlled checkbox
    this.setState({ localRestaurantChecked: checked });
  };

  changeGuestCount = event => {
    const guestCount = event.target.value;
    this.setState({ guestCount });
  };

  render() {
    return (
      <Route
        path="/settings"
        render={props => (
          <form className="container" onSubmit={this.handleSettingsForm}>
            <fieldset>
              {this.state.error && <p className="error">{this.state.error}</p>}

              <legend>Settings</legend>
              <div className="formboxcolumn">
                <label htmlFor="guests">Enter total number of guests</label>
                <input
                  type="number"
                  name="guests"
                  required="required"
                  value={this.state.guestCount}
                  onChange={this.changeGuestCount}
                />
              </div>

              <div className="formboxrow">
                <input
                  type="checkbox"
                  id="randomCheck"
                  checked={this.state.localRestaurantChecked}
                  onChange={e => this.localRestaurantChecked(event)}
                />

                <label htmlFor="randomCheck">
                  Add a local restaurant to the list of choices
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
                  id="favRestaurant"
                  checked={this.state.favRestaurantChecked}
                  onChange={e => this.favoriteRestaurantChecked(event)}
                />

                <label htmlFor="favRestaurant">
                  Use your favorite restaurant as your choice
                </label>
              </div>
              <div className="formboxcolumn">
                <button>Start App</button>
              </div>
            </fieldset>
          </form>
        )}
      />
    );
  }
}
export default withRouter(SettingsForm);
