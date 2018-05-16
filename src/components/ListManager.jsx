import React from 'react';
import List from './List';

var currentItems = [];

class ListManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: [], newItemText:'' };
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({newItemText: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        currentItems.push(this.state.newItemText);
        this.setState({items: currentItems, newItemText: ''});
    }
    
    render()  {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} value={this.state.newItemText}/>
                    <button type="submit">Add</button>
                </form>
                <List items={currentItems} />
            </div>
        );
    }

}

export default ListManager;