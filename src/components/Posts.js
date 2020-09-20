import React from 'react'
import GridLoader from "react-spinners/GridLoader"

const Posts = ({ posts, loading }) => {
    if (loading) {
        return <div style={{display: 'flex', flexDirection: 'center', justifyContent: 'center', alignItems: 'center', textAlign: 'center', minHeight:'50vh'}}><GridLoader/></div>
    }
    return (
        <ul className="list-group mb-4">
        {posts.map(post => (
            <li key={post.id} className="list-group-item">{post.title}</li>
        ))}
    </ul>
    )
}

export default Posts

