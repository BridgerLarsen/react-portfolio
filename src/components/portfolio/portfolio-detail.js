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

        return (
            <div>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        )
    }
}