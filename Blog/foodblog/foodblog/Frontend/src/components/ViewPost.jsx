import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

export default function ViewPost() {
  const [blogs, setBlogs] = useState([])
  const [tags, setTags] = useState([])
  const { id } = useParams()
  const navigate = useNavigate()

  function inputsHandler(e) {
    setTags((prevTags) => [...prevTags, e.target.name])
  }
  const postHandler = (e) => {
    setBlogs((prevBlogs) => [
      ...prevBlogs,
      {
        [e.target.name]: e.target.value,
      },
    ])
  }

  useEffect(() => {
    axios.get(`http://localhost:4000/posts/get-post/${id}`)
      .then((response) => {
        console.log(response.data.data)
        setBlogs(response.data.data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }, [])

  if(blogs){
    return (
    <>
      <div className='vb-content'>
          <div>
            <img className='vb-img' src={blogs.imageURL} />
            <div className='vb-title'>{blogs.title}</div>
            <div className='vb-desc'>{blogs.desc}</div>
            <div className='vb-tags'>
              <p className='vb-tags-text' style={{ color: 'white' }}>{blogs.tags}</p>
            </div>
            <div className='vb-recipe'>{blogs.recipe}</div>
          </div>
      </div>
      <button onClick={() => navigate(`/blog`)}>Go Back</button>
    </>
  )}
}
