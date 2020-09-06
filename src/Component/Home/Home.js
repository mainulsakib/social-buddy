import React , { useState, useEffect }  from 'react';
import Post from '../Post/Post';
import Header from '../Header/Header';


const Home = () => {
    const[posts,setPosts]= useState([])
    useEffect( ()=>
        {
            fetch('http://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>
           setPosts(data)
            )}
        ,[])
  
    return (
        <div style={{backgroundColor:"blue"}}>
               <Header></Header>   
  {posts.map(post=> (
 
 <Post post={post}></Post>

))}
        </div>
    );
};

export default Home;