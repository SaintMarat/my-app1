import React from "react";
import '../style/App.scss';

class Color extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: '#ffffff'
        };
    }
    changeColor = () => {
        const newColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        this.setState({ color: newColor });
    };
    render() {
        return (
            <div className="box"
                style={{ backgroundColor: this.state.color }}
            >
                <button onClick={this.changeColor}>Click Me</button>
            </div>
        )
    }

}

export default Color