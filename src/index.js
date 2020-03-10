import React from "react";
import ReactDOM from "react-dom";
//import "./index.css";
//import App from "./components/App";

class App extends React.Component {
  render() {
    const options = ["Olive Garden", "Red Lobster", "Longhorn"];

    return (
      <div>
        <Header
          title="Random Restaurant"
          subtitle="Where will your next meal be?"
        />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
        <Hamburger />
      </div>
    );
  }
}

const Hamburger = () => {
  return (
    <div>
      <p>Three lines here</p>
    </div>
  );
};

class Action extends React.Component {
  handlePick() {
    alert("handlePick");
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What Should I do?</button>
      </div>
    );
  }
}
class Options extends React.Component {
  render() {
    return (
      <div>
        {this.props.options.map(option => (
          <p key={option}>
            <Option key={option} optionText={option} />
          </p>
        ))}
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return <div>{this.props.optionText}</div>;
  }
}

class AddOption extends React.Component {
  render() {
    return <div>Add Option Here</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
