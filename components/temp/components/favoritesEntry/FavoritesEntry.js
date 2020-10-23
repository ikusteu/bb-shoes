import React from 'react';
import './FavoritesEntry.css';
import Button from '../button/Button';

class FavoritesEntry extends React.Component {
    render() {
        return (
            <figure className="favorites-entry">
                <img src={require('../../media/featured_temp.jpeg')} />
                <figcaption>
                    <h4>Shoe</h4>
                    <p>Price: $200</p>
                    <Button text="Add to Cart" />
                </figcaption>
            </figure>
        );
    } 
}

export default FavoritesEntry;