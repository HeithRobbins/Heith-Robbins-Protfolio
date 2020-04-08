import React from 'react';
import { Link } from 'react-router-dom'

// props are so we can pass data to compones 
export default function(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <h4>{props.url}</h4>

            <Link to={`/portfolio/${props.slug}`}>Link</Link>
        </div>
    );
}