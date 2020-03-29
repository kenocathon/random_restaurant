import React from "react";
import SettingsForm from "./SettingsForm";
import Header from "./Header";
import OptionModal from "./OptionModal";
import ProfileForm from "./ProfileForm";
import AddRestaurant from "./AddRestaurant";
import { BrowserRouter, Route } from "react-router-dom";

//import "./index.css";
//import App from "./components/App";

export default class App extends React.Component {
  state = {
    options: [], // array of restaurant options to pick from
    maxGuests: 0, // sets limit of guests and used to disable buttons in AddRestaurant.js
    selectedOption: "", // boolean for modal rendering. If empty string will be false.
    localRestaurant: "", // name of random local restaurant
    favRestaurant: "" // name of restaurant set it profile as favorite restaurant
  };

  // Handles Clear button to remove all options from rendering. Sets state to empty
  handleDeleteOptions = () => {
    if (this.state.favRestaurant && this.state.localRestaurant) {
      this.setState(() => ({
        options: [this.state.favRestaurant, this.state.localRestaurant]
      }));
    } else if (this.state.favRestaurant) {
      this.setState(() => ({
        options: [this.state.favRestaurant]
      }));
    } else if (this.state.localRestaurant) {
      this.setState(() => ({
        options: [this.state.localRestaurant]
      }));
    } else {
      this.setState(() => ({
        options: []
      }));
    }
  };

  handleRandomPick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];

    this.setState(() => ({ selectedOption: option }));
  };

  // Handles selectedOption state and sets to empty when Okay button is clicked.
  handleSelectedOption = () => {
    this.setState(() => ({
      selectedOption: ""
    }));
  };

  // handles error for AddRestaurant Component and sets state to new array of options.
  handleAddRestaurant = newRestaurant => {
    if (!newRestaurant) {
      return "Enter valid value to add a restaurant";
    } else if (this.state.options.indexOf(newRestaurant) > -1) {
      return "This restaurant already exists in the list";
    }

    this.setState(prevState => ({
      options: prevState.options.concat(newRestaurant)
    }));
  };

  // Sets state of maxGuests for validation of Pick A Restaurant button.
  handleSettingsForm = numberOfGuests => {
    if (!numberOfGuests) {
      return "Number of guests must be entered";
    } else if (numberOfGuests <= 0) {
      return "Guests must be a positive integer";
    } else if (numberOfGuests > 6) {
      return "The maximum number of guests allowed is 6";
    }
    this.setState(() => ({
      maxGuests: numberOfGuests,
      options: []
    }));
  };

  //Add a local restaurant to options state.
  addLocalToOptions = isChecked => {
    if (isChecked) {
      const restaurantList = [
        "Olive Garden",
        "Red Lobster",
        "Texas Roadhouse",
        "Longhorn",
        "Ruby Tuesday's",
        "Chillis",
        "Applebees"
      ];
      const filteredList = restaurantList.filter(
        value => value.toLowerCase() != this.state.favRestaurant.toLowerCase()
      );

      const randomNum = Math.floor(Math.random() * filteredList.length);
      let localRestaurant = filteredList[randomNum];

      localRestaurant =
        localRestaurant.charAt(0).toUpperCase() + localRestaurant.slice(1);

      this.setState(prevState => ({
        options: prevState.options.concat(localRestaurant),
        localRestaurant
      }));
    }
  };
  // Boolean that determines if checked in settings form. Favorite Restaurant is stored in local storage
  addFavToOptions = isChecked => {
    if (isChecked) {
      this.setState(prevState => ({
        options: prevState.options.concat(this.state.favRestaurant)
      }));
    }
  };

  handleFavRestaurant = restaurant => {
    this.setState(() => ({ favRestaurant: restaurant }));
  };

  render() {
    return (
      <div>
        <Route children={() => <Header title="Random Restaurant" />} />

        <ProfileForm
          className="container"
          firstName={this.state.fName}
          lastName={this.state.lName}
          eMail={this.state.email}
          favRestaurant={this.state.favRestaurant}
          handleFavRestaurant={this.handleFavRestaurant}
        />

        <SettingsForm
          handleSettingsForm={this.handleSettingsForm}
          favRestaurant={this.state.favRestaurant}
          addLocalToOptions={this.addLocalToOptions}
          addFavToOptions={this.addFavToOptions}
          maxGuests={this.state.maxGuests}
        />

        <AddRestaurant
          options={this.state.options}
          handleAddRestaurant={this.handleAddRestaurant}
          handleDeleteOptions={this.handleDeleteOptions}
          maxGuests={this.state.maxGuests}
          handleRandomPick={this.handleRandomPick}
          localRestaurant={this.state.localRestaurant}
          favRestaurant={this.state.favRestaurant}
          currentGuestCount={this.state.options.length}
        />

        <OptionModal
          handleSelectedOption={this.handleSelectedOption}
          selectedOption={this.state.selectedOption}
        />
      </div>
    );
  }
}
