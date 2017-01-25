import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';
import ContentPanel from '../ContentPanel';
import TcLogo from '../images/tc-logo-gold-v2.svg';
import './home.css';

import AmorWomenImg from '../images/carousel/amor-women.jpg';
import ChurchBenImg from '../images/carousel/church-ben.jpg';
import BaptismImg from '../images/carousel/baptism.jpg';
const CAROUSEL_IMAGES = [
    AmorWomenImg, //'amor-women.jpg'
    ChurchBenImg, //'church-ben.jpg'
    BaptismImg //'baptism.jpg'
];

class HomePanel extends Component {
    render() {
        return (
            <ContentPanel
                panelId='home'
                height={this.props.height}
            >
                <div style={{
                    height: '100%',
                    width: '100%',
                    position: 'relative'
                }}>
                <Carousel
                    controls={false}
                    indicators={false}
                    slide={true}
                >
                    {CAROUSEL_IMAGES.map(function(img, i) {
                           return <Carousel.Item
                               key={img}
                           >
                               <div
                                   className="item-bg"
                                   style={{
                                       backgroundImage: "url(" + img + ")"
                                   }}
                               />
                           </Carousel.Item>
                    })}
                </Carousel>
                <div className="carousel-content">
                    <div className="col-sm-12"> {/* no-pad */}
                        <div className="row logo-tag-row hidden-xs">
                            <div className="col-sm-6 logo-tag-cell no-pad">
                                <p className="mission-text mission-text-top">
                                    Proclaim the Cross
                                </p>
                            </div>
                            <div className="col-sm-6 text-right no-pad">
                                <p className="mission-text mission-text-top text-right">
                                    Join the Movement
                                </p>
                            </div>
                        </div>
                        <div className="row logo-img-row">
                            <div
                                className="col-xs-12 logo-img-cell text-center no-pad middle-parent">
                                <div className="middle">
                                    <img
                                        style={{width: '70%', height: '70%'}}
                                        src={TcLogo}
                                        alt="The Commons Logo"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row logo-tag-row hidden-xs">
                            <div className="col-sm-6 logo-tag-cell no-pad">
                                <p className="mission-text mission-text-bottom">
                                    Cultivate Disciples
                                </p>
                            </div>
                            <div
                                className="col-sm-6 text-right logo-tag-cell no-pad">
                                <p className="mission-text mission-text-bottom text-right">
                                    Embrace the Oppressed
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </ContentPanel>
        );
    }
}

HomePanel.propTypes = {
    height: React.PropTypes.number.isRequired
};

export default HomePanel;
