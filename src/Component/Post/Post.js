import React  from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import  './Post.css'
import { Link } from 'react-router-dom';



const Post = (props) => {
  
    const {title,body,id}=props.post

   
    return (
        <div>

<div id="card">
<Card className='card' >
      <CardActionArea>
      <CardMedia
        
        image="https://media.gettyimages.com/photos/woman-lifts-her-arms-in-https://earthsky.org/upl/2018/12/comet-wirtanen-Jack-Fusco-dec-2018-Anza-Borrego-desert-CA-e1544613895713.jpgvictory-mount-everest-national-park-picture-id507910624?s=612x612g"
        title="Paella dish"
      />
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
        
      <Button variant="contained" color="secondary">
      <Link id="link" to={`/post/${id}`}>see more</Link>
</Button>
      </CardActions>
    </Card>
</div>





            {/* <p><small>{id}</small></p>
    <h1>{title}</h1>
    <p>{body}</p> */}
        </div>
    );
}

export default Post;


