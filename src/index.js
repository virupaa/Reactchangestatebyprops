import React from "react";
import ReactDOM from "react-dom";

const Counter = (props) => {
  return (
    <div>
      <button onClick={props.handleClick}>CLICK ME</button>
      <p>{props.displayText}</p>
    </div>
  );
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div>
        <Counter
          handleClick={this.handleClick}
          displayText={this.state.count}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
