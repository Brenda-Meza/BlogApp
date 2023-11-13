import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Logo from './Logo.jsx'

export default function CreatePage() {

  const cloud_name="dyov9ceqf";
  const [userForm, setUserForm] = useState({
    title: "",
    desc: "",
    recipe: "",
    imageURL:"",
  })

  const [tags, setTags] = useState([])
  const[image, setImage]=useState();
  const inputsHandler = (e)=> {
      setUserForm((prevNext) => ({
      ...prevNext,
      [e.target.name]: e.target.value,
    })
  )}

  const postHandler = (e) => {
    setUserForm((prevNext) => ({
      ...prevNext,
      [e.target.name]: e.target.value
    }))
  }

  const cloudHandler = (e) => {
  const formData = new FormData(); 
    formData.append('file', e.target.files[0]);
    formData.append("upload_preset", 'Blogimages');

    axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, formData)
    .then((res) => {      
      const imageurl = res.data.secure_url;
      userForm.imageURL=imageurl
        setImage(imageurl)
    })      
  }

  const onSubmit = (e) => {
    e.preventDefault()

    axios
      .post("http://localhost:4000/posts/create-post", { userForm, tags })
      .then((res) => {
          console.log(res.data)
          setUserForm({
              title: "",
              desc: "",
              recipe: "",
              imageURL: "",
              tags: "",
          })
          setTags({
            vegetarian: false,
            international: false,
            junkFood: false,
            soups: false,
            dessert: false,
            recipes: false,
            other: false,
          })
        })
  }
  useEffect(() => { }, [])

  return (
    <>
      <div className="createContainer">
        <h1 className="posth1">Create your Post</h1>
        <Logo />
        <form className="createPostForm" onSubmit={onSubmit}>
        <div className="form-group container " style={{marginTop:"5%",textAlign:"left", fontSize:"1.25rem" , fontWeight:"bold"}}>
        <label htmlFor="imageUrl"> Upload Image</label>
        <input 
        type="file" 
        className="form-control"
        name="image" 
        id="image"
        onChange={cloudHandler}
        onSubmit={inputsHandler}
        />
        <img src={image} className="w-200 h-100" />
      </div>
      <br/>
      <input className="titleBox" placeholder="Title" name="title" onChange={postHandler}></input>
      <input className="descBox" placeholder="Add a short description" name="desc" onChange={postHandler}></input>
      <textarea className="blogPost" placeholder="Enter your post content here" name="recipe" onChange={postHandler} rows="18">
      </textarea>
      <div className="checkContainer">
        <div className="option1">
          <input type="checkbox" id="option1" name="vegetarian" onChange={inputsHandler} />
          <label for="vegetarian"> Vegetarian </label>
        </div>
        <div className="option2">
          <input type="checkbox" id="option2" name="international" onChange={inputsHandler} />
          <label for="international"> International </label>
        </div>
        <div className="option3">
          <input type="checkbox" id="option3" name="junkFood" onChange={inputsHandler} />
          <label for="junkFood"> Junk Food </label>
        </div>
        <div className="option4">
          <input type="checkbox" id="option4" name="soups" onChange={inputsHandler} />
          <label for="soups"> Soups </label>
        </div>
        <div className="option5">
          <input type="checkbox" id="option5" name="dessert" onChange={inputsHandler} />
          <label for="dessert"> Dessert </label>
        </div>
        <div className="option6">
          <input type="checkbox" id="option6" name="recipes" onChange={inputsHandler} />
          <label for="recipes"> Recipes </label>
        </div>
        <div className="option7">
          <input type="checkbox" id="option7" name="other" onChange={inputsHandler} />
          <label for="other"> Other </label>
        </div>
      </div>
    <button>Cancel</button>
    <button>Post</button>
  </form>
</div>
    </>
)}
