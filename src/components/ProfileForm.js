import React from "react";

const ProfileForm = props => {
  return (
    <fieldset>
      <legend>Profile</legend>
      <label htmlFor="fname">First Name</label>
      <input type="text" name="fname" />
      <label htmlFor="lname">Last Name</label>
      <input type="text" name="lname" />
      <label htmlFor="mail">Email Address</label>
      <input type="email" name="mail" />
      <label htmlFor="favRestaurant">Favorite Restaurant</label>
      <input type="text" name="favRestaurant" />
    </fieldset>
  );
};

export default ProfileForm;
