import React from "react";
class Profile extends React.Component {
  constructor(props) {
    console.log("child 1 Constructor");
    super(props);
    this.state = {
      count1: 0,
      count2: 1,
    };
  }
  render() {
    console.log("child 1 Render");
    return (
      <>
        <h1> Profile Class Component: {this.props.name}</h1>
        <h2> count1: {this.state.count1}</h2>
        <h2> count2: {this.state.count2}</h2>
        <button
          onClick={() => {
            this.setState({
              count1: this.state.count1 + 1,
            });
          }}
        >
          Update count
        </button>
      </>
    );
  }

  componentDidMount() {
    // Best place for API call
    this.timer = setInterval(() => {
      console.log("Hello Shrutika ");
    }, 1000);
    console.log("Child1 ComponentDidMount");
  }
  componentDidUpdate() {
    console.log("Child1 ComponentDidUpdate");
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Child1 ComponentWillUnmount");
  }
}

export default Profile;
