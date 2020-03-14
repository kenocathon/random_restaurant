import React from "react";
import ReactDOM from "react-dom";
//import "./index.css";
//import App from "./components/App";

class App extends React.Component {
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

        <SettingsForm
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

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
        <Hamburger />
      </header>
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

class SettingsForm extends React.Component {
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

class RandomRestaurantPicker extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.handleRandomPick}
          disabled={!this.props.enablePickARestaurant}
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
        <AddRestaurant
          handleAddRestaurant={this.props.handleAddRestaurant}
          guestCount={this.props.options.length}
        />
        {this.props.options.map(option => (
          <p key={option}>{option}</p>
        ))}
        <button onClick={this.props.handleDeleteOptions}>Clear All</button>
      </div>
    );
  }
}

class AddRestaurant extends React.Component {
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
    this.setState(() => {
      return { error };
    });
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

ReactDOM.render(<App />, document.getElementById("root"));
