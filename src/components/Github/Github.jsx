import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

function Github() {
    const username = "uzair-mirza"
    const [data , setData] = useState([])
    const [followers , setFollowers] = useState([])
    useEffect(() => {
        fetch("https://api.github.com/users/"+username)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setData(data)
        })
    } , []) 
    useEffect(() => {
        fetch('https://api.github.com/users/'+username+'/followers')
        .then(response => response.json())
        .then(followers => {
            console.log(followers)
            setFollowers(followers)
        })
    } , [])

  return (
    <div className='text-center m-4
    bg-gray-600 text-white 
    p-4 text-3xl'>Github followers: {data.followers}
        <div>Git URL : 
            <Link to={data.html_url}>
            {data.html_url}
            </Link>
        </div>
        {followers.map((follower) => (
        <div>
            Followers : {follower.login}
        </div>

        ))}
            
        <div className='text-center'>
            <img src={data.avatar_url} alt="Git Picture" width={300} />
        </div>
    </div>
  )
}

export default Github
