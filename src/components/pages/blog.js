import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Blog extends Component {
    constructor() {
        super();

        this.state = {
            BlogItems: []
        };

        this.getBlogItems = this.getBlogItems.bind(this);
    }

    getBlogItems() {
        axios.get("https://bridgerlarsen.devcamp.space/portfolio/portfolio_blogs", {
            withCredentials: true
        })
        .then(response => {
            this.setState({
                BlogItems: response.data.portfolio_blogs
            })
        })
        .catch(error => {
            console.log("getBlogItems error", error);
        })
    }

    componentWillMount() {
        this.getBlogItems();
    }

    render() {
        const blogRecords = this.state.BlogItems.map(blogItem => {
            return <h1>{blogItem.title}</h1>
        })
        return (
            <div>
                {blogRecords}
            </div>
        )
    }
}

export default Blog;