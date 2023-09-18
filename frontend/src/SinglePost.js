import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SinglePost = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/posts/${id}`);
        setPost(response.data);
      } catch (error) {
        console.error('Error Fetching:', error);
      }
    };

    fetchPost();
  }, [id]); // You should specify 'id' as a dependency for the useEffect

  return (
    <div className="container-pb-5">
      {/* <nav> - There's an unclosed <nav> tag here */}
      <br /> {/* Use <br /> instead of </br> */}
      <h1>{post.title}</h1> {/* Use curly braces to render dynamic content */}
      <p className="lead">{post.content}</p> {/* Fix the className syntax */}
      <p>
        Author <span className="badge">{new Date(post.created)}</span> {/* Fix the date display */}
      </p>
      <div>
        <h2>Title: {post.title}</h2>
        <p>Content: {post.content}</p>
        {/* Add more post details as needed */}
      </div>
    </div>
  );
};

export default SinglePost;
