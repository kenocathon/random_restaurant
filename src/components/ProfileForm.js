import React from "react";
import { Link } from "react-router-dom";

export default class ProfileForm extends React.Component {
  state = {
    error: ""
  };

  handleSaveProfile = event => {
    event.preventDefault();
    const favRestaurant = event.target.elements.favRestaurant.value.trim();
    const fname = event.target.elements.fname.value.trim();
    const lname = event.target.elements.lname.value.trim();
    const mail = event.target.elements.mail.value.trim();
    let error = "";

    if (!fname) {
      error = "Error: please enter first name";
    } else if (!lname) {
      error = "Error: please enter last name";
    } else if (!mail) {
      error = "Error: please enter email address";
    } else {
      this.props.handleSaveProfile(favRestaurant);
      event.target.elements.fname.value = "";
      event.target.elements.lname.value = "";
      event.target.elements.mail.value = "";
      event.target.elements.favRestaurant.value = "";
    }

    this.setState(() => ({ error }));
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
          {this.state.error && <p className="error">{this.state.error}</p>}
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
