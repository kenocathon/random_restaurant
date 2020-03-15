import React from "react";
import Form from "./SettingsForm";

export default class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSaveProfile = this.handleSaveProfile.bind(this);
  }

  handleSaveProfile(event) {
    event.preventDefault();
    const favRestaurant = event.target.elements.favRestaurant.value.trim();
    this.props.handleSaveProfile(favRestaurant);
    event.target.elements.fname.value = "";
    event.target.elements.lname.value = "";
    event.target.elements.mail.value = "";
    event.target.elements.favRestaurant.value = "";
  }

  render() {
    return (
      <form onSubmit={this.handleSaveProfile}>
        <fieldset>
          <legend>Profile</legend>

          <label htmlFor="fname">First Name</label>
          <input type="text" name="fname" required="required" />

          <label htmlFor="lname" required="required">
            Last Name
          </label>
          <input type="text" name="lname" />

          <label htmlFor="mail" required="required">
            Email Address
          </label>
          <input type="email" name="mail" />

          <label htmlFor="favRestaurant">Favorite Restaurant</label>
          <input type="text" name="favRestaurant" />

          <button>Save</button>
        </fieldset>
      </form>
    );
  }
}
