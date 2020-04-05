import React from "react";
import { withRouter } from "react-router-dom";

class ProfileForm extends React.Component {
  state = {
    error: "",
  };

  handleErrors = event => {
    event.preventDefault();
    let error = "";

    this.setState(() => ({ error }));

    if (!error) {
      this.props.history.push("/settings");
    }
  };

  handleChangeFirstName = event => {
    const firstName = event.target.value;
    this.props.handleFirstName(firstName)
  };

  handleChangeLastName = event => {
    const lastName = event.target.value;
    this.props.handleLastName(lastName)
  };

  handleChangeEmail = event => {
    const eMail = event.target.value;
    this.props.handleEmail(eMail)
  };

  handleChangeFavoriteRestaurant = event => {
    const favRestaurant = event.target.value.trim();
    this.props.handleFavRestaurant(favRestaurant);
  };

  render() {
    return (
      <form className="container" onSubmit={this.handleErrors}>
        <fieldset>
          <legend>Public Profile</legend>

          {this.state.error && <p className="error">{this.state.error}</p>}

          <div className="formboxcolumn">
            <label htmlFor="fname">First Name *</label>

            <input
              type="text"
              name="fname"
              id="fname"
              required="required"
              value={this.props.firstName}
              onChange={this.handleChangeFirstName}
            />
          </div>

          <div className="formboxcolumn">
            <label htmlFor="lname">Last Name *</label>
            <input
              type="text"
              name="lname"
              id="lname"
              required="required"
              value={this.props.lastName}
              onChange={this.handleChangeLastName}
            />
          </div>

          <div className="formboxcolumn">
            <label htmlFor="mail">Email Address *</label>
            <input
              type="email"
              name="mail"
              id="mail"
              required="required"
              value={this.props.eMail}
              onChange={this.handleChangeEmail}
            />
          </div>

          <div className="formboxcolumn">
            <label htmlFor="favRestaurant">Favorite Restaurant *</label>
            <input
              type="text"
              name="favRestaurant *"
              id="favRestaurant"
              required="required"
              value={this.props.favRestaurant}
              onChange={this.handleChangeFavoriteRestaurant}
            />
          </div>

          <div className="formboxcolumn">
            <button>Save</button>
          </div>
        </fieldset>
      </form>
    );
  }
}
export default withRouter(ProfileForm);
