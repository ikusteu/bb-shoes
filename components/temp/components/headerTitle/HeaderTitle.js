import React from 'react';
import './HeaderTitle.css';

const titleSrc = require('../../media/Logo.jpg');

class HeaderTitle extends React.Component {
    render() {
        return (
            <div className="headerTitle">
                <div className="title image-container">
                    <img src={titleSrc} alt="bb-shoes-logo"/>
                </div>
            </div>
        );
    }
}

export default HeaderTitle;