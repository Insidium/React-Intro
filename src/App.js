import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import Avatar from "./Avatar";

//Class Component
class App extends React.Component {
  //set up state
  constructor(props) {
    super(props);
    this.state = { showGithub: false };
  }
  render() {
    //props
    const ryanAvatar = (
      <Avatar
        name="Ryan"
        job="Developer"
        github="Insidium"
        showGithub={this.state.showGithub}
      />
    );
    const genAvatar = (
      <Avatar
        name="Gen"
        job="Leet Developer"
        github="GenL"
        showGithub={this.state.showGithub}
      />
    );
    const toggleGithub = () => {
      this.setState({ showGithub: !this.state.showGithub });
    };
    return (
      <Fragment>
        {ryanAvatar}
        {genAvatar}
        <button onClick={toggleGithub}>Toggle GitHub</button>
      </Fragment>
    );
  }
}

export default App;
