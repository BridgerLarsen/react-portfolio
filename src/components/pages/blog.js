import React, { Component } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import BlogItem from '../blog/blog-item';

class Blog extends Component {
    constructor() {
        super();

        this.state = {
            blogItems: [],
            currentPage: 0,
            totalCount: 0,
            isLoading: true
        };

        this.getBlogItems = this.getBlogItems.bind(this);
        this.activateInfiniteScroll();
    }

    activateInfiniteScroll() {
        window.onscroll = () => {
            if (this.state.isLoading || this.state.blogItems.length === this.state.totalCount) {
                return;
            } 

            if (window.innerHeight + document.documentElement.scrollTop + 1 > document.documentElement.offsetHeight) {
                this.getBlogItems();
            }
        }
    }

    getBlogItems() {
        this.setState({
            currentPage: this.state.currentPage + 1
        })
        axios.get(`https://bridgerlarsen.devcamp.space/portfolio/portfolio_blogs?page=${this.state.currentPage}`, {
            withCredentials: true
        })
        .then(response => {
            this.setState({
                blogItems: this.state.blogItems.concat(response.data.portfolio_blogs),
                totalCount: response.data.meta.total_records,
                isLoading: false
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
        const blogRecords = this.state.blogItems.map(blogItem => {
            return <BlogItem key={blogItem.id} blogItem={blogItem} />
        })
        return (
            <div className="blog-container">
                <div className="content-container">    
                    {blogRecords}
                </div>

                {this.state.isLoading ? (
                <div className="content-loader">
                    <FontAwesomeIcon icon="spinner" spin />
                </div> ) : null}
                
            </div>
        )
    }
}

export default Blog;