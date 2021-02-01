import React, { Component } from 'react';
import { EditorState, covertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

export default class RichTextEditor extends Component {
    constructor() {
        super();

        this.state = {
            editorState: EditorState.createEmpty()
        }
    }

    render() {
        return (
            <div>
                <Editor 
                    editorState={this.state.editorState}
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                />
            </div>
        )
    }
}