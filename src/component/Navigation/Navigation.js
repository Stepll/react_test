import React from 'react';
import './Navigation.css';

const Navigation = () => {
    return (
        <nav className='app-navigation'>
            <div>
                <a href = "/page1"> page 1 </a>
            </div>
            <div>
                <a href = "/page2"> page 2 </a>
            </div>
            <div>
                <a href = "/page3"> page 3 </a>
            </div>
        </nav>
    );
}

export default Navigation;