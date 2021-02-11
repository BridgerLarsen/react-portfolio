import React, { Component } from 'react';
import axios from 'axios';

export default class PortfolioDetail extends Component {
    constructor(props) {
        super(props);
    }

    getPortfolioItem() {
        axios
            .get(`https://bridgerlarsen.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`)
            .then(response => {
                console.log("portfolio item", response); 
            })
            .catch(error => {
                console.log("getPorfolioItem error", error);
            });   
    }

    componentDidMount() {
        this.getPortfolioItem();
    }

    render() {
        return (
            <div>
                <h2>Portfolio Detail for {this.props.match.params.slug}</h2>
            </div>
        )
    }
}