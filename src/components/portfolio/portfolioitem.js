import React from 'react';

// props are so we can pass data to compones 
export default function(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <h4>{props.url}</h4>
        </div>
    );
}