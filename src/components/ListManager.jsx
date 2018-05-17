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
        var divMarginTop = { marginTop: 30 }
        return (
            <div className="container col-sm-3">
                <div className="card border-primary" style={divMarginTop}>
                    <div className="card-header bg-primary" >
                        <h3 className="text-white">{this.props.title}</h3>
                    </div>
                    <div className="row card-body">
                        <form className="form-inline" onSubmit={this.handleSubmit}>
                            <div className="col-sm-9" >
                                <input className="form-control border-border-info" type="text" 
                                        onChange={this.handleChange} value={this.state.newItemText} />
                            </div>
                            <div className="col-sm-2" >
                                <button className="btn btn-primary" type="submit">Add</button>
                            </div>
                        </form>
                        <div style={divMarginTop}>
                            <List items={this.currentItems} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default ListManager;