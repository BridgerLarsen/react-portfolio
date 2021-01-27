import React, { Component } from 'react';

export default class BlogForm extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <form>
                <input type="text" />
                <input type="text" />

                <button>Save</button>
            </form>
        )
    }
}