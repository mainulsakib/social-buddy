import React from 'react';
import './Comment.css';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },

    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        float:"left"
    },
}));


const Comment = (props) => {
    const { name, email, body, id } = props.comment;
    const style = {
        color: "white",
        backgroundColor: "DodgerBlue",
        paddingRight: "10px",
        border: "1px solid black",
        margin: "20px",
        float: "left",
        width:'100%',
      
    }
    const classes = useStyles();
    return (

        <div style={style}>

            <Avatar alt="" className={classes.large} src={` https://randomuser.me/api/portraits/men/${id}.jpg`} />
            <Box width={1 / 4}  p={1} my={0.5}>
                <h4>{name}</h4>
  
            </Box>


            <p>{body}</p>

        </div>
    );
};

export default Comment;
