import React from 'react';

const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>My name is {props.name}, my interest include {props.interest} and I'm' {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default person;
