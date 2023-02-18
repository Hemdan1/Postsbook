import React from 'react'
import * as requests from "../utils/axios-utils"
import { Link, useParams } from 'react-router-dom'
import { useQuery } from 'react-query'

export const UserPosts = () => {
    const {userId} = useParams();

    const {data, isError, isLoading, error} = useQuery(['userposts', userId], requests.posts,
    {
        select: (data)=>data.data.filter(post=>post.userId===parseInt(userId))
        
    })
    const {data:user, isError:isUsersError, isLoadingUsersLoading, error: usersError} = useQuery('user', requests.users,
    {
        select: (user)=>user?.data.find(user=>user.id===parseInt(userId))
        
    })

    if(isLoading || isLoadingUsersLoading) return <h2>Loading...</h2>
    if(isError) return <h2>{error.message}</h2>
    if(isUsersError) return <h2>{usersError.message}</h2>

  return (
    <div className='row row-cols-1 mx-auto w-75' >
        <h3 className=' col text-center border-bottom mb-5 '>{user?.name} Posts</h3>
        {
            data.map(post=> {
            return (
            <div key={post.id} className="col card mb-2 p-2 fw-bold text-center">
                <Link to={`/posts/${userId}/${post.id}`} className="">{post.title}</Link>
            </div>
            )})
        }
    </div>
  )
}
