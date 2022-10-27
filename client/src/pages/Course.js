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
    {course.videos.map(video => (
     
      <iframe 
      width="560" 
      height="315" 
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
      src={video.url}
      title={video.name}
       >
      </iframe>
    ))}
    </>}
    
    </>
  )
}

export default Course