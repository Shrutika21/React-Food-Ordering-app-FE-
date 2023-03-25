import { Component } from "react";
import { Outlet } from "react-router-dom";
class AboutClass extends Component {
  constructor() {
    super();
    console.log("parent constructor");
  }

  render() {
    console.log("parent render");
    return (
      <div>
        <h1>About Us Page</h1>
        <p> Welcome to the Food-Mood 🚀</p>
        <Outlet></Outlet>
      </div>
    );
  }

  componentDidMount() {
    console.log("Parent: componentDidMount");
  }

  componentDidUpdate() {
    console.log("Parent componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("Parent componentWillUnmount");
  }
}
export default AboutClass;
