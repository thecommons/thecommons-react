import React, {Component} from 'react';
import ContentPanel from '../ContentPanel';

class HomePanel extends Component {
    render() {
        return (
            <ContentPanel
                panelId='home'
                height={this.props.height}
            >
                Content
            </ContentPanel>
        );
    }
}

HomePanel.propTypes = {
    height: React.PropTypes.number.isRequired
};

export default HomePanel;
