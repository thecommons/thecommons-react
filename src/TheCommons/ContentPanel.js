import React, {Component} from 'react';

class ContentPanel extends Component {

    render() {
        return (
            <div style={{height: this.props.height}}>
                {this.props.children}
            </div>
        );
    }
}

ContentPanel.propTypes = {
    height: React.PropTypes.number.isRequired,
    panelId: React.PropTypes.string.isRequired
};

export default ContentPanel;
