import React from 'react'
import { useParams } from 'react-router-dom'
import * as requests from "../utils/axios-utils"
import { useQuery } from 'react-query'

export const Post = () => {
    const {postId} = useParams();
    const {userId} = useParams();

    const {data, isError, isLoading, error} = useQuery(['post', postId], requests.posts,
    {
        select: (data)=>{
           const wantedPost =  data.data.find(post=>post.id===parseInt(postId))
           if(wantedPost) {
            return wantedPost
           } else {
            return undefined
           }
        }  
    })
    const {data:user, isError:isUsersError, isLoadingUsersLoading, error: usersError} = useQuery('user', requests.users,
    {
        select: (user)=>user?.data.find(user=>user.id===parseInt(userId))
        
    })

    if(isLoading || isLoadingUsersLoading) return <h2>Loading...</h2>
    if(isError) return <h2>{error.message}</h2>
    if(isUsersError) return <h2>{usersError.message}</h2>

  return (
    <div className='row row-cols-1 mx-auto w-75'>
        <h3 className=' col text-center border-bottom mb-5 '>{user?.name}</h3>
        <h6 className=' col text-center border-bottom mb-5 '>{data?.title}</h6>
        <div className='col text-center'>{data?.body}</div>
    </div>
  )
}
