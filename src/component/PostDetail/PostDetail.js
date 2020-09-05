import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';





const PostDetail = () => {
    const {id} = useParams();
    const [post, setPost] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data)) 

    },[]);
    
    const [comments, setComments] = useState([])
    useEffect(() => {
        const urls = `https://jsonplaceholder.typicode.com/comments?postId=${id}`
        fetch(urls)
        .then(res => res.json())
        .then(data => setComments(data) )
    },[]);

  
    return (
        <div>
           <div style={{marginBottom:'12vh'}}>
           
      <Container maxWidth="sm">
        
      <Typography gutterBottom variant="h5" component="h2">
            {post.title}
          </Typography>
    <br/>
    <Typography variant="body2" color="textSecondary" component="p">
           {post.body}
          </Typography>

          <br/>
          <br/>
          <br/>
          <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
       
      </Container>
          
           </div>
        

     <div>
{
    comments.map(com => <Comment comment ={com}></Comment> )
}
      </div>
        </div>
    );
};

export default PostDetail;