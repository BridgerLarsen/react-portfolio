import React, { Component } from 'react';

export default class BlogForm extends Component {
    constructor() {
        super();

        this.state = {
            title: "",
            blog_status: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        this.props.handleSuccessfullFormSubmission(this.state);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
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

                <button type="submit">Save</button>
            </form>
        )
    }
}