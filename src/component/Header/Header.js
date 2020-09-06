import React from 'react';
import './Header.css';

const Header = (props) => {
    return (
        <header className='app-header'>
            <div class='textheader'>
                {props.title}
            </div>
        </header>
    );
}

export default Header;