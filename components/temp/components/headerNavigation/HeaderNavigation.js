import React from 'react';
import './HeaderNavigation.css';


class HeaderNavigation extends React.Component {
    navArray = ["Shoes", "Boots", "Accessories", "Info", "About"]

    render() {
        
        return (
            <div className="navigation">
                    <ul className="navbar">
                        {
                            this.navArray.map(
                                (item) => (item === "About") 
                                ? <li key={item} className="about-nav">About</li>
                                : (
                                    <li key={item} className={item.toLowerCase()}>{item}
                                        <div className={`hidden ${item.toLowerCase()}-nav`}>
                                            <h1>{item.toUpperCase()}</h1>
                                        </div>
                                    </li> 
                                )
                            )
                        }
                    </ul>
            </div>
        );
    }
}

export default HeaderNavigation;