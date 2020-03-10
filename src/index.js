import React from "react";
import ReactDOM from "react-dom";
//import "./index.css";
//import App from "./components/App";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleRandomPick = this.handleRandomPick.bind(this);
    this.state = {
      options: ["Olive Garden", "Red Lobster", "Longhorn"],
      guests: 3
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

  render() {
    return (
      <div>
        <Header
          title="Random Restaurant"
          subtitle="Where will your next meal be?"
        />
        <AddRestaurant guests={1} />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />

        <Action
          checkOptions={this.state.options.length == this.state.guests}
          handleRandomPick={this.handleRandomPick}
        />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
        <Hamburger />
      </div>
    );
  }
}

const Hamburger = () => {
  return (
    <div>
      <p>Three lines here</p>
    </div>
  );
};

class Action extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.handleRandomPick}
          disabled={!this.props.checkOptions}
        >
          Pick A Restaurant
        </button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        {this.props.options.map(option => (
          <p key={option}>
            <Option key={option} optionText={option} />
          </p>
        ))}
        <button onClick={this.props.handleDeleteOptions}>Clear All</button>
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return this.props.optionText;
  }
}

class AddRestaurant extends React.Component {
  handleAddRestaurant(e) {
    e.preventDefault();
    const newRestaurant = e.target.elements.restaurant.value.trim();
    if (newRestaurant) {
      alert(newRestaurant);
    }
  }
  render() {
    return (
      <form onSubmit={this.handleAddRestaurant}>
        <label>Guest: {this.props.guests}</label>
        <input type="text" name="restaurant" />
        <button>Add</button>
      </form>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
