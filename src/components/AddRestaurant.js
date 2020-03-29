import React from "react";
import { withRouter, Route } from "react-router-dom";

//exported to Options.js
class AddRestaurant extends React.Component {
  state = {
    error: ""
  };

  handleAddRestaurant = e => {
    e.preventDefault();
    const newRestaurant = e.target.elements.restaurant.value.trim();
    const error = this.props.handleAddRestaurant(newRestaurant);
    this.setState(() => ({ error }));
    e.target.elements.restaurant.value = "";
  };

  render() {
    const maxGuestsReached = () => {
      if (this.props.favRestaurant && this.props.localRestaurant) {
        return this.props.currentGuestCount === this.props.maxGuests + 2;
      } else if (this.props.favRestaurant || this.props.localRestaurant) {
        return this.props.currentGuestCount === this.props.maxGuests + 1;
      } else {
        return this.props.currentGuestCount === this.props.maxGuests;
      }
    };

    return (
      <Route
        path="/app"
        render={props => (
          <div>
            {this.state.error && <p className="error">{this.state.error}</p>}
            <h1 className="page-title">Random Picker</h1>
            <h2 className="page-title">
              Max number of guests: {this.props.maxGuests}
            </h2>
            <form onSubmit={this.handleAddRestaurant}>
              <div className="container">
                <div className="formboxcolumn">
                  {maxGuestsReached() ? (
                    <label className="picker-label">
                      Maximum number of picks reached!
                    </label>
                  ) : (
                    <label className="picker-label">
                      Enter a restaurant choice
                    </label>
                  )}

                  <input
                    type="text"
                    name="restaurant"
                    style={
                      maxGuestsReached()
                        ? { display: "none" }
                        : { display: "block" }
                    }
                  />
                  <button
                    className="add-btn"
                    style={
                      maxGuestsReached()
                        ? { display: "none" }
                        : { display: "block" }
                    }
                  >
                    Add
                  </button>
                </div>

                <div className="options container">
                  {this.props.options.map(option => (
                    <p className="option" key={option}>
                      {option}
                    </p>
                  ))}

                  {this.props.options.length >= 1 && (
                    <a
                      className="clear-options"
                      onClick={this.props.handleDeleteOptions}
                    >
                      Clear
                    </a>
                  )}
                </div>
              </div>
            </form>
            <div className="btn-wrapper">
              <button
                className="important-btn"
                onClick={e => this.props.handleRandomPick(e)}
                style={
                  maxGuestsReached()
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                Pick A Restaurant
              </button>
            </div>
          </div>
        )}
      />
    );
  }
}

export default withRouter(AddRestaurant);
