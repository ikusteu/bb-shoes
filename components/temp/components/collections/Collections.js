import React from 'react';
import './Collections.css';
import CollectionsItem from '../collectionsItem/CollectionsItem';

class Collections extends React.Component {
    render() {
        return (
            <section className="collections" id="collections-anchor">
                <h1>Shop by Style</h1>
                <div className="collections-items">
                    <CollectionsItem name="COLLECTION X" />
                    <CollectionsItem name="COLLECTION X" />
                    <CollectionsItem name="COLLECTION X" />
                    <CollectionsItem name="COLLECTION X" /> 
                </div>
            </section>
        );
    }
}

export default Collections;