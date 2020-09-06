import React from 'react';
import nav from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className={nav.app_navigation}>
            <div class={nav.item}>
                <div>
                    <NavLink to="/page1" activeClassName={nav.nav_active}> page 1 </NavLink>
                </div>
                <div>
                    <NavLink to="/page2" activeClassName={nav.nav_active}> page 2 </NavLink>
                </div>
                <div>
                    <NavLink to="/page3" activeClassName={nav.nav_active}> page 3 </NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;