import React, { Component } from 'react';
import axios from 'axios';

import PortfolioSidebarList from '../portfolio/portfolio-sidebar-list';

export default class PortfolioManager extends Component {
    constructor() {
        super();

        this.state = {
            portfolioItems: []
        };
    }

    getPortfolioItems() {
        axios.get('https://bridgerlarsen.devcamp.space/portfolio/portfolio_items', { 
            withCredentials: true 
        }).then(response => {
            console.log(response);
            this.setState({
                portfolioItems: response.data.portfolio_items
            });
        }).catch(error => {
            console.log('There was an error:', error);
        });
    }

    componentDidMount() {
        this.getPortfolioItems();
    }
    render() {
        return (
            <div className="portfolio-manager-wrapper">
                <div className="left-column">
                    <h1>Portfolio form</h1>
                </div>

                <div className="right-column">
                    <PortfolioSidebarList data={this.state.portfolioItems} />
                </div>
            </div>
        )
    }
}