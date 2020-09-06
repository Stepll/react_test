import React from 'react';
import './Page2-Block-scroll.css';
import Page2_Block from './Page2-Block';

const Page2_Block_Scroll = (props) => {
    return (
        <scroll-page className='sp2' id={props.Number + "scroll2"}><Page2_Block id={props.id} text="text" check={props.check} /></scroll-page>
    );
}

export default Page2_Block_Scroll;