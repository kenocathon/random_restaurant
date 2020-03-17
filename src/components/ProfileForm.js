import React from "react";
import { Link } from "react-router-dom";

export default class ProfileForm extends React.Component {
  handleSaveProfile = event => {
    event.preventDefault();
    const favRestaurant = event.target.elements.favRestaurant.value.trim();
    this.props.handleSaveProfile(favRestaurant);
    event.target.elements.fname.value = "";
    event.target.elements.lname.value = "";
    event.target.elements.mail.value = "";
    event.target.elements.favRestaurant.value = "";
  };

  render() {
    return (
      <form
        style={this.props.visible ? { display: "block" } : { display: "none" }}
        className="container"
        onSubmit={this.handleSaveProfile}
      >
        <fieldset>
          <legend>Profile</legend>

          <div className="formboxcolumn">
            <label htmlFor="fname">First Name</label>
            <input type="text" name="fname" required="required" />
          </div>

          <div className="formboxcolumn">
            <label htmlFor="lname">Last Name</label>
            <input type="text" name="lname" required="required" />
          </div>

          <div className="formboxcolumn">
            <label htmlFor="mail">Email Address</label>
            <input type="email" name="mail" required="required" />
          </div>

          <div className="formboxcolumn">
            <label htmlFor="favRestaurant">Favorite Restaurant</label>
            <input type="text" name="favRestaurant" />
          </div>

          <div className="formboxcolumn">
            <button>Save</button>
          </div>
        </fieldset>
      </form>
    );
  }
}
