import React from 'react';
import { Link } from 'react-router-dom';
import Truncate from 'react-truncate';
import striptags from 'striptags';

const BlogItem = props => {
    const {
        id,
        blog_status,
        content,
        title,
        featured_image_url
    } = props.blogItem;

    return (
        <div>
            <Link to={`/b/${id}`}>
                <h1>{title}</h1>
            </Link>
            <div>
                <Truncate 
                    lines={5} 
                    ellipsis={
                        <span>
                            ... <Link to={`/b/${id}`}>Read More</Link>
                        </span>
                    }
                >
                    {striptags(content)}
                </Truncate>
            </div>
        </div>
    )
}

export default BlogItem;