import React from 'react';
import './ButtonNumber.css';

const ButtonNumber = (probs) => {
    return (
        <div className='window-button'>
            <button>{probs.Number}</button>
        </div>
    );
}

export default ButtonNumber;