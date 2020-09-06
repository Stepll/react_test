import React from 'react';
import './ButtonNumber.css';

const ButtonNumber = (props) => {
    return (
        <div className='window-button'>
            <a href={props.page}>{props.Number}</a>
        </div>
    );
}

export default ButtonNumber;