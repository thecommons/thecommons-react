import React, {Component} from 'react';

import HomePanel from './panels/home';

const PANEL_CLASSES = {
    home: HomePanel,
    sundays: HomePanel
    //sundays: SundayPanel,
    //mission: MissionPanel,
    //sermons: SermonsPanel,
    //community: CommunityPanel,
    //media: MediaPanel,
    //footer: FooterPanel
};

class ContentContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            height: window.innerHeight
        };
    }

    componentDidMount() {
        window.addEventListener('resize', () => this._setHeight());
    }

    componentWillUnmount() {
        window.removeEventListener('resize', () => this._setHeight());
    }

    render() {
        var rThis = this;
        return (
            <div id="tc-content" className="container-fluid">
                {this.props.enabledPanels.map(function(panelName) {
                    let ThisPanel = PANEL_CLASSES[panelName];
                    return ThisPanel ? <ThisPanel
                        key={panelName}
                        height={rThis.state.height}
                    /> : null;
                }).filter(function(x) { return x; })}
            </div>
        );
    }

    _setHeight() {
        this.setState({height: window.innerHeight});
    }
}

ContentContainer.propTypes = {
    enabledPanels: React.PropTypes.array.isRequired
};

export default ContentContainer;
