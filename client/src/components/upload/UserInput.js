import React from 'react'

const UserInput = props => (
    <ul>
        {
         props.items.map((item, index) => <li key={index}>{item}</li>)
        }
    </ul>
);

export default UserInput;