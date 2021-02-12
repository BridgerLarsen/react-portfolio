import React, { Component } from 'react';
import axios from 'axios';

export default class PortfolioDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            portfolioItem: {}
        }
    }

    getPortfolioItem() {
        axios
            .get(`https://bridgerlarsen.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`)
            .then(response => {
                this.setState({
                    portfolioItem: response.data.portfolio_item
                })
            })
            .catch(error => {
                console.log("getPorfolioItem error", error);
            });   
    }

    componentDidMount() {
        this.getPortfolioItem();
    }

    render() {
        const {
            banner_image_url,
            category,
            description,
            id,
            logo_url,
            name,
            thumb_image_url,
            url
        } = this.state.portfolioItem;

        const bannerImageStyles = {
            backgroundImage: "url(" + thumb_image_url +")",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"     
        }

        return (
            <div>
                <div className="portfolio-detail-wrapper">
                    <div className="banner-image" style={bannerImageStyles}>
                        <img src={logo_url} />
                    </div>

                    <div className="portfolio-detail-content-wrapper">
                        <div className="title">
                            {name}
                        </div>

                        <div className="description">
                            {description}
                        </div>

                        <div className="site-link-wrapper">
                                <a href={url} className="site-link" target="_blank">
                                    Visit {name}
                                </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}