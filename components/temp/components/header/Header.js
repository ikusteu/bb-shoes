import React from 'react';
import './Header.css';
import HeaderTitle from '../headerTitle/HeaderTitle';
import HeaderNavigation from '../headerNavigation/HeaderNavigation';

class Header extends React.Component {
    render() {
        return (
            <header>
                <HeaderTitle />
                <HeaderNavigation />
            </header>
            
        );
    }
}

export default Header;


