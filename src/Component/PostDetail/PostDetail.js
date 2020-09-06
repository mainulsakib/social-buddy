import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

const PostDetail = () => {

    const { postId } = useParams()
    const classes = useStyles();
  
    const [post, setPost] = useState({})
    useEffect(() => {
        fetch(`http://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])

    const [comments, setComments] = useState([])
    useEffect(() => {
        fetch(`http://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then(response => response.json())
            .then(data =>
                setComments(data)
            )
    })

    return (
        <div>
               <Card className={classes.root} variant="outlined">
      <CardContent>
          
        
        <Typography variant="h5" component="h2">
            title:
       {post.title}
        </Typography>
        
        <Typography variant="body2" component="p">
         
          <br />
          {post.body}
        </Typography>
      </CardContent>
      
    </Card>


            {/* <div style={{ border: "1px solid red" }}>
                <p><small>post no: {postId}</small></p>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
            <div> */}
                <h3>Comments</h3>
                {
                    comments.map(comment => <Comment comment={comment}></Comment>)
                }
            </div>
        // </div>
    );
};

export default PostDetail;