import React from 'react';
import './CollectionsItem.css';

class CollectionsItem extends React.Component {
    render() {
        return (
            <figure className="collection-item">
                <div className="image-container">
                    <img src={require('../../media/collections-temp.jpeg')} />
                </div>
                <figcaption>
                    <h4>{this.props.name}</h4>
                </figcaption> 
            </figure>
        );
    }
}

export default CollectionsItem;