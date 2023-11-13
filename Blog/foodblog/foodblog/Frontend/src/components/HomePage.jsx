import Carousel from 'react-bootstrap/Carousel';
import dessertImage from '/src/assets/dessert.jpg';
import internationalImage from '/src/assets/international.png';
import junkImage from '/src/assets/junk.png'
import soupImage from '/src/assets/soup.png';
import veggieImage from '/src/assets/veggies.png';
import recipeImage from '/src/assets/recipe.png'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo.jsx'

export default function CarouselFadeExample() {
  const carouselItemStyle = {
    maxHeight: '650px', // Adjust the height as needed
  }
  const [blogs, setBlogs] = useState([])
  const [tags, setTags] = useState([])
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
    <Logo />
    <div className="d-flex justify-content-center align-items-center">
      <div className="carousel-container">
        <Carousel className='carousel'>
          <Carousel.Item style={carouselItemStyle}>
            <img src={dessertImage} alt="First slide" />
            <Carousel.Caption>
              <h3>Desserts</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={carouselItemStyle}>
            <img src={internationalImage} alt="Second slide" />
            <Carousel.Caption>
              <h3>International Foods</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={carouselItemStyle}>
            <img src={junkImage} alt="Third slide" />
            <Carousel.Caption>
              <h3>Junk Food</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={carouselItemStyle}>
            <img src={recipeImage} alt="Fourth slide"/>
            <Carousel.Caption>
              <h3>Recipes</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={carouselItemStyle}>
            <img src={soupImage} alt="Fifth slide" />
            <Carousel.Caption>
              <h3>Soups</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={carouselItemStyle}>
            <img src={veggieImage} alt="Sixth slide" />
            <Carousel.Caption>
              <h3>Vegetarian</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
      <div className='default'>
      <h1 className='featured-title'><a href="/blog" style={{ textDecoration: 'none', color: '#cc3d48' }}>Explore recent blogs ≫</a></h1>
      </div>
    <div className='posts-featured'>
      {blogs.map((blog, index) => {
          if (index < 3) {
            return (
              <Card className='post-card' >
                <Card.Img className='post-img' variant="top" src={blog.imageURL} />
                <Card.Body>
                  <Card.Title>{blog.title}</Card.Title>
                  <Card.Text>
                    {blog.desc}
                  </Card.Text>
                  <Button 
                    className='btn'
                    variant='danger' 
                    style={{ color: 'white' }} 
                    onClick={() => navigate(`/view/${blog._id}`)}
                  >
                    View Blog
                  </Button>
                </Card.Body>
              </Card>
        )}
      })}
    </div>       
    </>
  )
}