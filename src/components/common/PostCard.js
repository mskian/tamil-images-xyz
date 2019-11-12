import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const PostCard = ({ post }) => {
    const url = `/${post.slug}/`

    return (
        <Link to={url} className="post-card">
            <header className="post-card-header">
                {post.feature_image &&
                    <div className="post-card-image" style={{
                        backgroundImage: `url(${post.feature_image})` ,
                    }}></div>}
                {post.featured && <span>Featured</span>}
            </header>
            <h2 className="post-card-title">{post.title}</h2>
            <footer className="post-card-footer">
                <div className="post-card-footer-left">
                    <time className="post-meta" dateTime={post.updated_at_zone}>Updated on &#x1f5d3; {post.updated_at_pretty}</time>
                </div>
            </footer>
        </Link>
    )
}

PostCard.propTypes = {
    post: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        feature_image: PropTypes.string,
        updated_at_pretty: PropTypes.string,
        updated_at_zone: PropTypes.string,
        featured: PropTypes.bool,
        excerpt: PropTypes.string.isRequired,
        primary_author: PropTypes.shape({
            name: PropTypes.string.isRequired,
            profile_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
}

export default PostCard
