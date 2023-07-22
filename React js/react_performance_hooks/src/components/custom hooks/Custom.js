import React from 'react'
import useGetApi from './CustomApi';
import useReverseString from './CustomHooks';

function Custom() {
    const numberReverse = useReverseString("123456");
  const technology = useReverseString("React js")
  // const {data} = useGetApi("https://jsonplaceholder.typicode.com/users");

  const usersData = useGetApi("https://jsonplaceholder.typicode.com/users")
  const postsData = useGetApi("https://jsonplaceholder.typicode.com/posts")
  return (
    <div>{console.log(usersData.data, postsData.data)}
    {numberReverse.reverseString} {technology.reverseString}
    {usersData.data?.map((item,index) => <h1> {index + 1} {item.name}</h1> )}
    {postsData.data?.map((item,index) => <h3 key={index} >{item.title}</h3> )}</div>
  )
}

export default Custom