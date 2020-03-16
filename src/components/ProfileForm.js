import React from "react";

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
        onSubmit={this.handleSaveProfile}
      >
        <fieldset>
          <legend>Profile</legend>

          <div className="formbox">
            <label htmlFor="fname">First Name</label>
            <input type="text" name="fname" required="required" />
          </div>

          <div className="formbox">
            <label htmlFor="lname" required="required">
              Last Name
            </label>
            <input type="text" name="lname" />
          </div>

          <div className="formbox">
            <label htmlFor="mail" required="required">
              Email Address
            </label>
            <input type="email" name="mail" />
          </div>

          <div className="formbox">
            <label htmlFor="favRestaurant">Favorite Restaurant</label>
            <input type="text" name="favRestaurant" />
          </div>

          <div className="formbox">
            <button>Save</button>
          </div>
        </fieldset>
      </form>
    );
  }
}
