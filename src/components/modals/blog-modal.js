import React, { Component } from 'react';
import ReactModal from 'react-modal';

export default class BlogModal extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <ReactModal 
                onRequestClose={() => {
                this.props.handleModalClose();
            }} isOpen={this.props.modalIsOpen}
            >
                <h1>Hi, I'm in a modal!</h1>
            </ReactModal>
        )
    }
}