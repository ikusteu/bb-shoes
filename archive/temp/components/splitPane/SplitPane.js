import React from 'react';
import './SplitPane.css';

class SplitPane extends React.Component {
    render() {
        return (
            <section className={'split ' + this.props.className}>

                <div className="split-left">
                    {this.props.left} 
                </div>

                <div className="split-right">
                    {this.props.right}
                </div>

            </section>
        );
    }
}

export default SplitPane;