import React from 'react';
import Item from './Item';
import './List.css'

function List(props){
    return (
        <div className="List">
            {
                props.items.map(item => 
                    <Item 
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    rating={item.rating}
                    
                    onupdaterating={props.onupdaterating}
                    onremove={props.onremove} />
                )
            }
        </div>
    );
}

export default List;