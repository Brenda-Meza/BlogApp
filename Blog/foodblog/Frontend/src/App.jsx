import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import CreatePage from './components/CreatePage';
import Register from './components/Register';
import Login from './components/Login';
import BlogPage from './components/BlogPage';
import ViewPost from './components/ViewPost';
import Footer from './components/Footer';
import Navigation from './components/Nav.jsx';
import SearchResults from './components/SearchResults';
import { useState } from 'react';
import AboutPage from './components/AboutPage.jsx';


export default function App() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <>
    <Navigation setSearchResults={setSearchResults} />
      <Routes>
        <Route path="/" element={<HomePage />}> </Route>
        <Route path="/about" element={<AboutPage />}> </Route>
        <Route path="/create" element={<CreatePage />}> </Route>
        <Route path="/register" element={<Register />}> </Route>
        <Route path="/login" element={<Login />}> </Route>
        <Route path="/blog" element={<BlogPage />}> </Route>    
        <Route path="/search" element={<SearchResults searchResults={searchResults} />}> </Route>
        <Route path="/view/:id" element={<ViewPost />}> </Route>
      </Routes>

      <Footer />
    </>
  )
}