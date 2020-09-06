import React from 'react';
import './Block.css';

const Block = (props) => {
    return (
        <scroll-page className='sp1' id={props.Number + "scroll"}>{props.Number} text</scroll-page>
        
    );
}

export default Block;