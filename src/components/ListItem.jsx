import React from "react";

class ListItem extends React.Component {
  render() {
    return (
      <li>
        <h4>
          {this.props.id}.
          {this.props.ingredient}
        </h4>
      </li>
    );
  }
}

export default ListItem;
