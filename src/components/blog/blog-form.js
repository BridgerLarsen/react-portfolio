import React, { Component } from 'react';
import axios from 'axios';
import DropzoneComponent from 'react-dropzone-component'; 

import '../../../node_modules/react-dropzone-component/styles/filepicker.css';
import '../../../node_modules/dropzone/dist/min/dropzone.min.css';

import RichTextEditor from '../forms/rich-text-editor';

export default class BlogForm extends Component {
    constructor() {
        super();

        this.state = {
            id: "",
            title: "",
            blog_status: "",
            content: "",
            featured_image: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRichTextEditorChange = this.handleRichTextEditorChange.bind(this);
        this.componentConfig = this.componentConfig.bind(this);
        this.djsConfig = this.djsConfig.bind(this);
        this.handle_featured_image_drop = this.handle_featured_image_drop.bind(this);

        this.featuredImageRef = React.createRef();
    };

    componentWillMount() {
        if (this.props.editMode) {
            this.setState({
                id: this.props.blogPost.id,
                title: this.props.blogPost.title,
                blog_status: this.props.blogPost.blog_status
            })
        }
    }

    componentConfig() {
        return {
            iconFiletypes: ['.jpg', '.png'],
            showFiletypeIcon: true,
            postUrl: "https://httpbin.org/post"
        };
    };

    djsConfig() {
        return {
            addRemoveLinks: true,
            maxFiles: 1
        };
    };

    handle_featured_image_drop() {
        return {
            addedfile: file => this.setState({ featured_image: file })
        };
    };

    handleRichTextEditorChange(content) {
        this.setState({ content })
    }

    buildForm() {
        let formData = new FormData();

        formData.append("portfolio_blog[title]", this.state.title);
        formData.append("portfolio_blog[blog_status]", this.state.blog_status);
        formData.append("portfolio_blog[content]", this.state.content);

        if (this.state.featured_image) {
            formData.append("portfolio_blog[featured_image]", this.state.featured_image);
        }

        return formData;
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        axios.post(
            "https://bridgerlarsen.devcamp.space/portfolio/portfolio_blogs",
            this.buildForm(),
            { withCredentials: true }
        )
        .then(response => {
            if (this.state.featured_image) {
                this.featuredImageRef.current.dropzone.removeAllFiles();
            }

            this.setState({
                title: "",
                blog_status: "",
                content: "",
                featured_image: ""
            })
            
            this.props.handleSuccessfullFormSubmission(response.data.portfolio_blog);
        })
        .catch(error => {
            console.log("handleSubmit blog error", error);
        })

        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="blog-form-wrapper">
                <div className="two-column">
                    <input 
                        type="text" 
                        onChange={this.handleChange}
                        name="title"
                        placeholder="Blog Title"
                        value={this.state.title}
                    />

                    <input 
                        type="text" 
                        onChange={this.handleChange}
                        name="blog_status"
                        placeholder="Blog Status"
                        value={this.state.blog_status}
                    />
                </div>

                <div className="one-column">
                    <RichTextEditor 
                        handleRichTextEditorChange={this.handleRichTextEditorChange} 
                        editMode={this.props.editMode}
                        contentToEdit={
                            this.props.editMode && this.props.blogPost.content 
                                ? this.props.blogPost.content 
                                : null
                        }
                    /> 
                </div>

                <div className="image-uploader">
                    {this.props.editMode && this.props.blogPost.featured_image_url ? (
                        <div className="edit-image-wrapper">    
                            <img src={this.props.blogPost.featured_image_url} />

                            <div className="image-removal-link">
                                <a>remove link</a>
                            </div>
                        </div>
                    ) : (
                        <DropzoneComponent
                            ref={this.featuredImageRef}
                            config={this.componentConfig()}
                            djsConfig={this.djsConfig()}
                            eventHandlers={this.handle_featured_image_drop()}
                        >
                            <div className="dz-message">Featured Image</div>
                        </DropzoneComponent>
                    )}
                </div>

                <button type="submit" className="btn">Save</button>
            </form>
        )
    }
}