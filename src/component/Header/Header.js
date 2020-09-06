import React from 'react';
import './Header.css';

const Header = (probs) => {
    return (
        <header className='app-header'>
            <div class='textheader'>
                {probs.title}
            </div>
        </header>
    );
}

export default Header;