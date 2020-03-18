import React from "react";
import Header from "./Header";
import SettingsForm from "./SettingsForm";
import OptionModal from "./OptionModal";
import ProfileForm from "./ProfileForm";
import AddRestaurant from "./AddRestaurant";

//import "./index.css";
//import App from "./components/App";

export default class App extends React.Component {
  state = {
    options: [],
    maxGuests: 0,
    selectedOption: "", //boolean for modal rendering. If empty string will be false.
    favRestaurant: "",
    localRestaurant: "",
    visible: {
      app: false,
      settings: false,
      profile: true
    }
  };

  // Handles Clear button to remove all options from rendering. Sets state to empty
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  // Handles Pick A Restaurant button and picks random restaurant. Sets state to option and shows on modal
  handleRandomPick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({ selectedOption: option }));
  };

  // Handles selectedOption state and sets to empty when Okay button is clicked.
  handleSelectedOption = () => {
    this.setState(() => ({ selectedOption: "" }));
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
  handleSubmitForm = numberOfGuests => {
    this.setState(() => ({
      maxGuests: numberOfGuests,
      visible: {
        settings: false,
        app: true,
        button: true
      }
    }));
  };

  handleSaveProfile = favRestaurant => {
    this.setState(() => ({
      favRestaurant,
      visible: {
        profile: false,
        settings: true
      }
    }));
  };

  AddToOptions1 = isChecked => {
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
      const randomNum = Math.floor(Math.random() * restaurantList.length);
      const localRestaurant = restaurantList[randomNum];
      this.setState(() => ({ localRestaurant }));
    }
  };
  AddToOptions2 = isChecked => {
    if (isChecked) {
      this.setState(prevState => ({
        options: prevState.options.concat(this.state.favRestaurant)
      }));
    }
  };

  handleBackButton = () => {
    this.setState(() => ({
      visible: {
        app: false,
        profile: false,
        settings: true
      }
    }));
  };

  render() {
    const isMaxNumberOfGuestsReached =
      this.state.options.length === this.state.maxGuests;
    return (
      <div>
        <Header
          title="Random Restaurant"
          subtitle="Where will your next meal be?"
        />

        <ProfileForm
          className="container"
          handleSaveProfile={this.handleSaveProfile}
          visible={this.state.visible.profile}
        />

        <SettingsForm
          handleSubmitForm={this.handleSubmitForm}
          AddToOptions1={this.AddToOptions1}
          AddToOptions2={this.AddToOptions2}
          maxGuests={this.state.maxGuests}
          currentGuestCount={this.state.options.length}
          favRestaurant={this.state.favRestaurant}
          checked={this.state.checked}
          visible={this.state.visible.settings}
        />

        <AddRestaurant
          options={this.state.options}
          handleAddRestaurant={this.handleAddRestaurant}
          handleDeleteOptions={this.handleDeleteOptions}
          maxGuests={this.state.maxGuests}
          enablePickARestaurant={isMaxNumberOfGuestsReached}
          handleRandomPick={this.handleRandomPick}
          localRestaurant={this.state.localRestaurant}
          visible={this.state.visible.app}
          backButton={this.handleBackButton}
        />

        <OptionModal
          selectedOption={this.state.selectedOption}
          handleSelectedOption={this.handleSelectedOption}
        />
      </div>
    );
  }
}
