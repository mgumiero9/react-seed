import React from "react";
import ListItem from "./ListItem";

class List extends React.Component {
  render() {
    var createItem = function(text, index) {
      return (
        <ListItem
          key={index + text}
          id={index}
          text={text}
        />
      );
    };
    return (
      <ul>{this.props.items.map(createItem)}</ul>
    );  
  }
}

export default List;
