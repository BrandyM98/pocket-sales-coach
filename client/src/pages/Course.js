import React from 'react'
import { QUERY_COURSE } from '../utils/queries'
import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'

const Course = () => {
  const {id} = useParams()
  console.log(id)
  const {loading, data} = useQuery(QUERY_COURSE, {variables:{courseId:id}})
  console.log(loading,data)
  const course = data?.course || {};
  console.log(course)
  return (
    <>
    {loading? <h1>LOADING...</h1> : <>
    <h1>{course.name}</h1>
    <h3>{course.description}</h3>
    {course.videos.map(video => (
     <div key={video._id} className="d-flex p-3 m-3 bg-dark text-white ">
      <iframe 
      className="m-3 "
      width="560" 
      height="315" 
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
      src={video.url}
      title={video.name}
       >
      </iframe>
      <div className="m-3 d-flex flex-column justify-content-center align-items-center ">
        <h3>{video.name}</h3>
        <p>{video.description}</p>
      </div>
      </div>
    ))}
    </>}
    
    </>
  )
}

export default Course