import React from "react";
import SettingsForm from "./SettingsForm";
import Header from "./Header";
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
        app: true
      }
    }));
  };

  handleSaveProfile = favRestaurant => {
    this.setState(() => ({
      favRestaurant,
      visible: {
        settings: true,
        profile: false
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
      const filteredList = restaurantList.filter(
        value =>
          value.toLowerCase() !=
          localStorage.getItem("favRestaurant").toLowerCase()
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

  AddToOptions2 = isChecked => {
    if (isChecked) {
      this.setState(prevState => ({
        options: prevState.options.concat(this.state.favRestaurant)
      }));
    }
  };

  goToProfile = () => {
    this.setState = () => ({
      visible: {
        profile: true,
        app: false,
        settings: false
      }
    });
  };

  render() {
    return (
      <div>
        <Header title="Random Restaurant" goToProfile={this.goToProfile} />

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
          handleRandomPick={this.handleRandomPick}
          localRestaurant={this.state.localRestaurant}
          backButton={this.handleBackButton}
          visible={this.state.visible.app}
        />

        <OptionModal
          handleSelectedOption={this.handleSelectedOption}
          selectedOption={this.state.selectedOption}
        />
      </div>
    );
  }
}
