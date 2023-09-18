import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Nav from './Nav'; // Assuming Nav is a component in './Nav'
import { Link } from 'react-router-dom'; // Use {} around Link
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const PostList = ({ post }) => { // Use curly braces for the post prop, not double parentheses
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {post.title}
        </Typography>
        <Link to={`/post/${post.id}`}> {/* Use backticks (`) for template literals */}
          <h2>{post.title}</h2>
        </Link>
        <Typography variant="subtitle1">
          {post.slug}
        </Typography>
        <Typography variant="body2">
          {post.content}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default PostList; // Don't forget to export the component
