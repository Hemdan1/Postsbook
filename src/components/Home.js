import React from 'react'
import { useQuery } from 'react-query'
import * as Requests from "../utils/axios-utils" 
import { UserCard } from './UserCard';

export const Home = () => {
    const {data, isError,error, isLoading} = useQuery('users', Requests.users)

    if(isLoading) return <h2>Loading...</h2>
    if(isError) return <h2>{error.message}</h2>

  return (
    <div className='row d-flex justify-content-center g-2'>
        {console.log(data?.data)}
        {
            data?.data.map(user=> {
            return (
                <UserCard key={user.id} user={user} />
            )
        })
        }
    </div>
  )
}
