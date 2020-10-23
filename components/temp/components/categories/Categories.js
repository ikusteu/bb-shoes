import React from 'react';
import Button from '../button/Button'
import './Categories.css';

const categories = [ 'Shoes', 'Boots', 'Accessories' ];

class Categories extends React.Component {
    render() {
        return (
            <section className="categories">
                
                <h1>Shop by Category</h1>
                <div className="categories-container">
                    {
                        categories.map(
                            category => (
                                <figure key={category} className="category bb-border image-container">
                                    <img src={require('../../media/category-' + category.toLocaleLowerCase() + '.jpeg')} />
                                    <Button text={category} />
                                </figure>
                            )
                        )
                    }
                </div>

            </section>
        );
    }
};

export default Categories;
