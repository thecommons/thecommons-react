import React, {Component} from 'react';

// TODO: move into panel definition (i.e. export nav info also)
const NAV_ITEMS = {
    home: {
        icon: "icon-commons-logo-mark-1-01",
        text: <i className="icon-commons-logo-horizontal"/>
    },
    sundays: {
        icon: "icon-commons-gathering",
        text: "Our Gathering"
    },
    mission: {
        icon: "icon-commons-mission",
        text: "Our Mission"
    },
    amor: {
        icon: "glyphicon-tent",
        text: "Amor Trip"
    },
    sermons: {
        icon: "icon-commons-sermons",
        text: "Sermons"
    },
    community: {
        icon: "icon-commons-community",
        text: "Community"
    },
    media: {
        icon: "icon-commons-sermons_videos",
        text: "Media"
    },
    give: {
        icon: "icon-commons-giving",
        text: "Give Online"
    }
};

class Sidebar extends Component {
    render() {
        return (
            <div className="tc-sidebar tc-sidebar-hidden">
                <ul className="nav nav-pills nav-stacked">
                    {this.props.enabledPanels.concat(this.props.enabledModals).map(function(panel) {
                        let navItem = NAV_ITEMS[panel];
                        return navItem ? <li
                            className={panel === "home" ? "brand" : ""} /* slight hax */
                            key={panel}
                        >
                            <a href={"#" + panel}>
                                <div className="icon">
                                    {navItem.icon.startsWith("icon") ?
                                        <i className={navItem.icon}/> :
                                        <span className={"glyphicon " + navItem.icon}/>}
                                </div>
                                <div className="text">
                                    {NAV_ITEMS[panel].text}
                                </div>
                            </a>
                        </li> : null;
                    }).filter(function(x) { return x; })}
                </ul>
            </div>
        );
    }
}

Sidebar.propTypes = {
    enabledPanels: React.PropTypes.array.isRequired,
    enabledModals: React.PropTypes.array.isRequired
};

export default Sidebar;
