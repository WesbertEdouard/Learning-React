import React from 'react';

const box = (props) => {
    return (
        <div>
             <div className="blackBox">
                <h1 onClick={props.click}>{props.boxText}</h1>
            </div>
        </div>
    )
};


export default box;
