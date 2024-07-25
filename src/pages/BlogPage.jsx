import React, {useEffect} from 'react';
import {useState} from "react";
import {Link} from "react-router-dom";

export const BlogPage = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    return (
        <div>
            <h1>Our news</h1>
            {
                posts.map((post)=> {
                    return <Link key={post.id} to={`/blog/${post.id}`}>
                        <li>{post.title}</li>
                    </Link>
                })
            }
        </div>
    );
};

