import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PortfolioItem extends Component {
    constructor(props) {
        super();

        this.state = { 
            portfolioItemBlurClass: ""
        }
    }

    handleMouseEnter() {
        this.setState({ portfolioItemBlurClass: "image-blur" });
    }

    handleMouseLeave() {
        this.setState({ portfolioItemBlurClass: "" });
    }

    render() {
        const { id, description, thumb_image_url, logo_url } = this.props.items; 
        return (
            <div className="portfolio-item-wrapper"
                onMouseEnter={() => this.handleMouseEnter()}
                onMouseLeave={() => this.handleMouseLeave()}
            >
                <div 
                    className={"portfolio-img-background " + this.state.portfolioItemBlurClass}
                    style={{ 
                        backgroundImage: "url(" + thumb_image_url + ")"
                    }}
                />

                <div className="img-txt-wrapper">
                    <div className="logo-wrapper">
                        <img src={logo_url}/>
                    </div>

                    <div className="subtitle">
                        {description}
                    </div>
                </div>
            </div>
        );
    }
}
