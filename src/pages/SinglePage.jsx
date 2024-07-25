import React from 'react';
import {Link, useParams, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

export const SinglePage = () => {

    const {id} = useParams()
    const navigate = useNavigate()
    const [post, setPost] = useState(null)

    const goBack = () => navigate(-1)
    const goHome = () => navigate('/', {replace: true})

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [id])


    return (
        <div>
            <button onClick={goBack}>goBack</button>
            <button onClick={goHome}>goHome</button>
            {post && (
                <>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <Link to={`/blog/${id}/edit`}>Edit</Link>
                </>
            )}
        </div>
    );
};

