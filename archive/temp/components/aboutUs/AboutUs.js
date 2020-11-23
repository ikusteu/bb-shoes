import React from 'react';
import About from '../about/About';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './AboutUs.css';
import Slider from '../slider/Slider';
import Article from '../article/Article';
import SplitPane from '../splitPane/SplitPane';

const vidSrc = require('../../media/Video_temp.mp4');

const welcomeArticle = {
    title: "Welcome to our workshop",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis vehicula rutrum. In ipsum ligula, pulvinar et massa ac, semper pharetra mi. Duis ultrices convallis nunc sit amet pellentesque. Nullam at risus ultricies, consequat dolor eget, egestas orci. Aliquam fringilla massa ac tortor hendrerit cursus. Duis feugiat massa augue, efficitur maximus libero commodo ut. Nam finibus placerat elit id suscipit. Nulla convallis nunc est, vel venenatis massa laoreet vehicula. Proin ultricies mauris id tortor luctus, vel elementum purus condimentum. Nam mauris mauris, pretium ac aliquet vel, consectetur et nisi. Proin nulla enim, aliquam at lorem vel, mollis rutrum nibh. Donec id vehicula nunc, in pellentesque nibh. Maecenas consequat mi id tincidunt posuere. Sed facilisis neque et mollis mattis. Donec ac enim ipsum. Pellentesque egestas arcu eu lacus malesuada, vestibulum viverra dolor semper. "
};

class AboutUs extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="aboutUs">
                    <Slider type="video" src={vidSrc} />
                    <Article className="welcome-article bb-border" title={welcomeArticle.title} text={welcomeArticle.text} />
                    <SplitPane className="meet-bruno" 
                        left={(
                            <div className="image-container">
                                <img src={require('../../media/meet-bruno.jpeg')} />
                            </div>
                        )}
                        right={<Article title="Meet Bruno" text={welcomeArticle.text} />}
                    />
                </div>
                <Footer />
            </>
        );
    }
}

export default AboutUs;