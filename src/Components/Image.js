import React from 'react';

const Image = props => {
    return (
        <div className="daily-img" key={props.id}>
            <img className="nasa-img" alt="NASA Image" src={props.image} />
            <p>{props.description}</p>
        </div>
    )
}

export default Image;