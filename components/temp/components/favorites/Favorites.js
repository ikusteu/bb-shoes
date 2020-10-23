import React from 'react';
import './Favorites.css';
import FavoritesEntry from '../favoritesEntry/FavoritesEntry';

class Favorites extends React.Component {
    render() {
        return (
            <section className="favorites">
                <h1>Favorites</h1>
                <div className="favorites-inner">
                    <i className="fav-sel  fa fa-chevron-left"></i>
                    <div className="favorites-container flex-nowrap">

                    <FavoritesEntry />
                    <FavoritesEntry />
                    <FavoritesEntry />
                    <FavoritesEntry />
                        
                    </div>
                    <i className="fav-sel  fa fa-chevron-right"></i>

                </div>

            </section>
        );
    }
}

export default Favorites;