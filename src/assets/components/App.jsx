import React from 'react';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      buttonText: 'click me'
    };

  }
  handleClick = () => {
    this.setState({ buttonText: this.state.inputText });
  }
  handleInputChange = (event) => {
    this.setState({ inputText: event.target.value });
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.inputText} onChange={this.handleInputChange} />
        <button onClick={this.handleClick}>{this.state.buttonText}</button>
      </div>
    )
  }
}

export default App;



