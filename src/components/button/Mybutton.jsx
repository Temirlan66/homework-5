import React from 'react';
import "./Mybutton.css"

const Mybutton = (props) => {
    return (
       <button className='myBtn' onClick={props.onClick}>{props.title}</button>
    );
};

export default Mybutton;