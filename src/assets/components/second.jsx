import React from 'react';
import '../style/second.scss';

class Second extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input1Value: '',
      input2Value: ''
    };
  }

  handleClick = () => {
    const result = this.state.input1Value * this.state.input2Value;
    this.setState({ result });
  }

  handleInput1Change = (event) => {
    this.setState({ input1Value: event.target.value });
  }

  handleInput2Change = (event) => {
    this.setState({ input2Value: event.target.value });
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.input1Value} onChange={this.handleInput1Change} />
        <input type="text" value={this.state.input2Value} onChange={this.handleInput2Change} />
        <button onClick={this.handleClick}>Click</button>
        <p>{this.state.result}</p>
      </div>
    )

  }
}

export default Second;
