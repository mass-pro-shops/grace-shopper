import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div>
      <Link to='/home'>
        <img className='pagenotfoundImage'
        src='/images/404PageNotFound.webp' 
        alt=''/>
      </Link>
    </div>
  )
}
