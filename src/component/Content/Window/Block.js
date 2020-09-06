import React from 'react';
import './Block.css';

const Block = (props) => {
    return (
        <scroll-page className='window-element' id={props.Number + "scroll"}>{props.Number} text</scroll-page>
        
    );
}

export default Block;