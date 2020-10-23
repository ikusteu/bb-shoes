import React from 'react';
import './Footer.css';
import FooterEntry from '../footerEntry/FooterEntry'

const entries = [
    [
        "Collections", [
            "Gentleman's Indispensible", 
            "Urban Twist", 
            "Wild, Wild West",
            "Accessories"
        ]
    ],
    [
        "Info", [
            "Return Policy",
            "Shipping",
            "Payment methods",
            "Sizes"   
        ]
    ],
    [
        "Contact Us", [
            "Phone: 099/8653-414",
            "E-mail: bb-shoes@gmail.com",
            "Adress: Ilica 21, Zagreb, Croatia"
        ]
    ]
]

class Footer extends React.Component {
    render() {
        return (
            <footer>
                {
                    entries.map( entry => 
                    <FooterEntry key={entry[0]} title={entry[0]} items={entry[1]} />
                    )
                }
            </footer>
        );
    }
}

export default Footer;