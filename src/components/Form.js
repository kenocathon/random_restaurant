import React from "react";

const Form = props => {
  return (
    <form>
      <FormField type="text" for="fname" label="First Name:" />
      <FormField type="text" for="lname" label="Last Name:" />
      <FormField type="email" for="email" label="Email:" />
      <FormField type="number" label="How many total guests?" />
      <FormField
        type="checkbox"
        label="Add a random restaurant from your area?"
      />
      <button>Submit</button>
    </form>
  );
};

const FormField = props => {
  return (
    <div>
      <label>{props.label}</label>
      <input type={props.type} />
    </div>
  );
};

export default Form;
export { FormField };
