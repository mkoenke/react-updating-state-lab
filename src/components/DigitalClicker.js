// Code DigitalClicker Component Here
import React from "react";

class DigitalClicker extends React.Component {
  state = { timesClicked: 0 };

  updateTimesClicked = () => {
    this.setState((prevState) => ({
      timesClicked: prevState.timesClicked + 1,
    }));
  };

  render() {
    return (
      <button onClick={this.updateTimesClicked}>
        {this.state.timesClicked}
      </button>
    );
  }
}

export default DigitalClicker;
