import React, { Component } from 'react';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';

import BlogForm from '../blog/blog-form';
import BlogDetailFeaturedImage from '../blog/blog-detail-featured-img';

export default class BLogDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentId: this.props.match.params.slug,
            blogItem: {},
            editMode: false
        };

        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleFeatureImageDelete = this.handleFeatureImageDelete.bind(this);
    }

    handleFeatureImageDelete() {
        this.setState({
            blogItem: {
                featured_image_url: ""
            }
        })
    }

    getBlogItem() {
        axios.get(
            `https://bridgerlarsen.devcamp.space/portfolio/portfolio_blogs/
            ${this.state.currentId}`
        )
        .then(response => {
            this.setState({
                blogItem: response.data.portfolio_blog
            });
        })
        .catch(error => {
            console.log("getBlogItem error", error);
        })
    }

    componentDidMount() {
        this.getBlogItem();
    }

    handleEditClick() {
        this.setState({
            editMode: true
        })
    }

    render() {
        const {
            title,
            content,
            featured_image_url,
            blog_status
        } = this.state.blogItem;

        const blogDetailManager = () => {
            if (this.state.editMode) {
                return (
                    <BlogForm 
                        handleFeatureImageDelete={this.handleFeatureImageDelete}
                        editMode={this.state.editMode}
                        blogPost={this.state.blogItem}
                    />
                )
            } else {
                return (
                    <div className="content-container">    
                        <h1 onClick={this.handleEditClick}>{title}</h1>
    
                        <BlogDetailFeaturedImage img={featured_image_url}/>
                       
                        <div className="content">{ReactHtmlParser(content)}</div>
                    </div>
                )
            }
        }

        return (
            <div className="blog-container">
                {blogDetailManager()}
            </div>
        )
    }
}