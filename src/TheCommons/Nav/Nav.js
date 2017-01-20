import React, {Component} from 'react';
import Sidebar from './Sidebar';
import './Nav.css';

class Nav extends Component {
    render() {
        return (
            <div>
                <div className="tc-topbar visible-xs text-right">
                    <div className="tc-sidebar-toggle">
                    <span
                        className="tc-sidebar-toggle-icon glyphicon glyphicon-menu-hamburger"
                    />
                    </div>
                </div>
                <Sidebar
                    enabledPanels={this.props.enabledPanels}
                    enabledModals={this.props.enabledModals}
                />
            </div>
        );
    }
}

Nav.propTypes = {
    enabledPanels: React.PropTypes.array.isRequired,
    enabledModals: React.PropTypes.array.isRequired
};

export default Nav;
