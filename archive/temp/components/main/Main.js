import React from 'react';
import './Main.css';
import Slider from '../slider/Slider';
import About from '../about/About';
import Categories from '../categories/Categories';
import Collections from '../collections/Collections';
import Favorites from '../favorites/Favorites';

class Main extends React.Component {
    render() {
        return (
            <main>
                <Slider type="carousel"/>
                <About />
                <Categories />
                <Collections />
                <Favorites />
            </main>
        );
    }
}

export default Main;