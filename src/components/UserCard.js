import React from 'react'
import { Link } from 'react-router-dom'

export const UserCard = ({user}) => {
  return (
    <div className='card col-sm-12 col-md-5 col-lg-3 m-1 fs-0'>
        <div className='card-body'>
            <div className='fw-bold mt-2'>{user.name}</div>
            <hr />
            <div><span className='fw-bold'>Username: </span>{user.username}</div>
            <div><span className='fw-bold'>Phone:</span> {user.phone}</div>
            <div><span className='fw-bold'>Email:</span> {user.email}</div>
            <div><span className='fw-bold'>Address:</span> {user.address.street} - {user.address.city}</div>
            <div><span className='fw-bold'>Company Name:</span>{user.company.name}</div>
            <div><span className='fw-bold'>Website: </span><a href={`${user.website}`} target='_blank' rel="noreferrer">{user.website}</a></div>
        </div>
        <hr />
        <button className='btn btn-primary d-flex mb-2 justify-content-center'> <Link to={`/posts/${user.id}`} className='text-white fw-bold'> Posts of {user.name.split(" ")[0]} </Link></button>
    </div>
  )
}
