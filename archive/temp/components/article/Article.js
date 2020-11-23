import React from 'react';
import './Article.css';

class Article extends React.Component {
    render() {
        return (
            <article className={this.props.className}>
                <div className="art-title">
                    <h1>{this.props.title}</h1>
                </div>
                <div className="art-text">
                    <p>{this.props.text}</p>
                </div>
            </article>
        );
    }
}

export default Article;