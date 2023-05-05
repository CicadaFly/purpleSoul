import React from 'react'
import image from '../assets/error.jpg'

const ErrorPage = () => {
  return (
    <div className='container mt-3'>
    <h1 className='text-5xl text-center'>ErrorPage<br/> 404-Not Found</h1>
    <div className='justify-center mt-5'>
      <p className= 'text-3xl text-center'>You shouldn't be here.</p>
      <img src={image} className='max-h-[50vh] m-auto'/>
    </div>
    </div>
  )
}

export default ErrorPage