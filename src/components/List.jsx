import React from 'react';
import ListItem from './ListItem';

var ingredients = [
    { "id": 0, "text": "ham", "priority": "x" },
    { "id": 1, "text": "cheese", "priority": "y" },
    { "id": 2, "text": "potatoes", "priority": "z" }
];

class List extends React.Component {
    render() {
        var listItems = ingredients.map(
            function (item) {
                return <ListItem 
                    id={item.id} 
                    ingredient={item.text} 
                    priority={item.priority} />
            }
        );
        return (
            <ul>
                {listItems}
            </ul>
        );
    }
}

export default List;
