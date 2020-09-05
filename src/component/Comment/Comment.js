import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
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
});

const generateImageId = id =>{
    
    let newId = id;
    if(newId>399){
        newId = newId - 403
    }
    else if(newId> 299 ){
        newId= newId -300
    }
    else if(newId>199){
        newId = newId - 200
    }
   
    else if(newId>99){
        newId = newId -100 
      }
return newId;
}

const Comment = (props) => {
   const {name,email,id,body} = props.comment;
  
   const containerStyle = {
          display:'flex',
          marginLeft:'6%',
          marginBottom:'30px'
      };

      const classes = useStyles();

      const imageId = generateImageId(id);

    return (
   <div style={containerStyle}>
      <div >
<img style={{borderRadius:'50%'}} src={`https://randomuser.me/api/portraits/med/men/${imageId}.jpg`} alt=""/>
    
 </div>

 <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {email}
        </Typography>
        
        <Typography className={classes.pos} color="textSecondary">
          {name}
        </Typography>
        <Typography variant="body2" component="p">
         {body}
          <br />
         
        </Typography>
      </CardContent>
     
    </Card>     
        </div>
    );
};

export default Comment;