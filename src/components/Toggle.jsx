import React from 'react';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            isToggleOn1: true,
            isToggleOn2: true };

        // This binding is necessary to make `this` work in the callback
        this.handleClick1 = this.handleClick1.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
    }

    handleClick1() {
        this.setState(prevState => ({
            isToggleOn1: !prevState.isToggleOn1
        }));
    }

    handleClick2() {
        this.setState(function(prevState) {
            return ({
                isToggleOn2: !prevState.isToggleOn2
            })
        });
    }
    
    render() {
        var divStyle = { 
            margin: 50,
            padding: 40,
            maxHeight: 200,
            maxWidth: 400                 
        };        
        return (
            <div className="row" style={divStyle}>
                <button className="btn btn-outline-success" onClick={this.handleClick1}>
                    {this.state.isToggleOn1 ? 'Click me! ON' : 'Click me! OFF'}
                </button>
                <button className="btn btn-info" onClick={this.handleClick2}>
                    {this.state.isToggleOn2 ? 'Click me! ON' : 'Click me! OFF'}
                </button>
            </div>
        );
    }
}

export default Toggle;