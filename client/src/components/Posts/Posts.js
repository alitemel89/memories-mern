import React from "react";
import Post from '../Post/Post';

import { useSelector } from "react-redux";
import useStyles from "./styles";
import { Grid, CircularProgress } from '@material-ui/core';

const Posts = ({ setCurrentId }) => {
  const { posts } = useSelector((state) => state.posts);
  console.log(posts);
  const classes = useStyles();
  return (
    !posts ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post, index) => (
          <Grid key={index} xs={12} sm={6} md={6} item={true} >
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};



export default Posts;

