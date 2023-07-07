import React, { useEffect, useState } from 'react'

function BackendApi() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts').then((resp) => resp.json()).then((resp) => setPosts(resp) ).catch((err) => console.log(err) )
    },[])
  return (
    <div>
        {console.log(posts)};
        {posts.map((post,index) => <div> 
            <h1> {post.id}. {post.title}</h1>
            <p> {post.body} </p>
           </div> )}
        <h1>Backend api</h1>
    </div>
  )
}

export default BackendApi