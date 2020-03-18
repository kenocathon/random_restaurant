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
    return (
      <div
        style={this.props.visible ? { display: "block" } : { display: "none" }}
        className="container"
      >
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddRestaurant}>
          <div className="formboxcolumn">
            <label>
              Enter restaurant pick for guest {this.props.options.length + 1}
            </label>
            <input
              type="text"
              name="restaurant"
              placeholder="Guests favorite restaurant"
            />
            <button>Add</button>
            <div className="dark-background">
              {this.props.options.map(option => (
                <p key={option}>{option}</p>
              ))}
              {this.props.localRestaurant && (
                <p>
                  {this.props.localRestaurant}
                  <span className="sponsored"> (sponsored)</span>
                </p>
              )}
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

        <div className="formboxcolumn">
          {this.props.enablePickARestaurant && (
            <button onClick={this.props.handleRandomPick}>
              Pick A Restaurant
            </button>
          )}
        </div>
      </div>
    );
  }
}
