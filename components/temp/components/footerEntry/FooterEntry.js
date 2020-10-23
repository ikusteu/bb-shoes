import React from 'react';
import './FooterEntry.css';

class FooterEntry extends React.Component {
    render() {
        return (
            <div className="footer-entry">
                <h2>{this.props.title}</h2>
                <ul>
                    {this.props.items.map( item => <li key={item}>{item}</li>)}
                </ul>
            </div>
        );
    }
}

export default FooterEntry;