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
        var divMargin = { marginTop: 30, marginLeft: 30 };                 
        var divMarginTop = { marginTop: 30 };                 
        return (
            <div className="col-sm-3">
                <div className="card border-primary" style={divMargin}>
                    <div className="card-header bg-primary" >
                        <h3 className="text-white">{this.props.title}</h3>
                    </div>
                    <div className="row card-body">
                        <form className="form-inline justify-content-center" onSubmit={this.handleSubmit}>
                            <div className="col-sm-9" >
                                <input className="form-control border-border-info" type="text" 
                                        onChange={this.handleChange} value={this.state.newItemText} />
                            </div>
                            <div className="col-sm-2" >
                                <button className="btn btn-primary" type="submit">Add</button>
                            </div>
                        </form>
                        <div className="offset-3 justify-content-start" style={divMarginTop}>
                            <List className="" items={this.currentItems} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default ListManager;