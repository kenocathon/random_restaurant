import React from "react";

//exported to Options.js
export default class AddRestaurant extends React.Component {
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
    const maxGuestsReached = this.props.count === this.props.maxGuests + 1;

    return (
      <div className={this.props.visible ? "visible" : "invisible"}>
        {this.state.error && <p className="error">{this.state.error}</p>}
        <h1 className="page-title">Random Picker</h1>
        <h2 className="page-title">
          Max number of guests: {this.props.maxGuests}
        </h2>
        <form onSubmit={this.handleAddRestaurant}>
          <div className="container">
            <div className="formboxcolumn">
              {maxGuestsReached ? (
                <label className="picker-label">
                  Maximum number of guests reached!
                </label>
              ) : (
                <label className="picker-label">
                  Enter restaurant choice for guest{" "}
                  {this.props.localRestaurant
                    ? this.props.options.length
                    : this.props.options.length + 1}
                </label>
              )}

              <input type="text" name="restaurant" />
              <button
                className="add-btn"
                onClick={this.props.restaurantCounter}
                disabled={maxGuestsReached}
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
            disabled={!maxGuestsReached}
          >
            Pick A Restaurant
          </button>
        </div>
      </div>
    );
  }
}
