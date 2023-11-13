import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function PostList() {
  const [blogs, setBlogs] = useState([])
  const [tags, setTags] = useState([])

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
    axios.get('http://localhost:4000/posts/')
      .then((response) => {
        console.log(response.data.data)
        setBlogs(response.data.data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }, [])

  return (
    <>
    <div>
      <table className='table'>
        <tbody>
          {blogs.map((blog, index) => (
            <tr key={index} className='BlogContent'>
            <Card className="text-center">
              <Card.Header>
                <Card.Title>{blog.title}</Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                {blog.desc}
                </Card.Text>
                <Button variant='danger' onClick={() => navigate(`/view/${blog._id}`)}>View Blog</Button>
              </Card.Body>
              {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
            </Card>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}