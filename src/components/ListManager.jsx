import React from 'react';
import List from './List';

class ListManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [], newItemText: '' };
        this.currentItems = [];

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ newItemText: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.currentItems.push(this.state.newItemText);
        this.setState({ items: this.currentItems, newItemText: '' });
    }

    render() {
        return (
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h3>{this.props.title}</h3>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" onChange={this.handleChange} value={this.state.newItemText} />
                            <button className="btn btn-primary" type="submit">Add</button>
                        </form>
                        <List items={this.currentItems} />
                    </div>
                </div>
            </div>
        );
    }

}

export default ListManager;