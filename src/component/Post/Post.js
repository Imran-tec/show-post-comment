import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Link } from 'react-router-dom';



const useStyles = makeStyles({
  root: {
    maxWidth: 685,
    minWidth:533,
    height:240
  },
  media: {
    height: 140,
  },
  btn:{
 color:'white',
 textDecoration:'none',
  },
});


const Post = (props) => {
  
    const {title,body,id} = props.post;

    const classes = useStyles();

    return (
        <div style={{margin:'0px 34%'}} >
         <Card className={classes.root}>
      <CardActionArea>
       
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       
        <Button  variant="contained" color="secondary">
        <Link  className={classes.btn} to={`/post/${id}`}>  See More </Link>
        </Button>
      </CardActions>
    </Card>   
          
  <br/>

            
        </div>
    );
};

export default Post;