import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Navigation from './components/Nav.jsx';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage.jsx';
import CreatePage from './components/CreatePage';
import BlogPage from './components/BlogPage';
import ViewPost from './components/ViewPost';
import Register from './components/Register';
import Login from './components/Login';
import SearchResults from './components/SearchResults';
import Footer from './components/Footer';

export default function App() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <>
    <Navigation setSearchResults={setSearchResults} />
      <Routes>
        <Route path="/" element={<HomePage />}> </Route>
        <Route path="/about" element={<AboutPage />}> </Route>
        <Route path="/create" element={<CreatePage />}> </Route>
        <Route path="/blog" element={<BlogPage />}> </Route>    
        <Route path="/view/:id" element={<ViewPost />}> </Route>
        <Route path="/register" element={<Register />}> </Route>
        <Route path="/login" element={<Login />}> </Route>
        <Route path="/search" element={<SearchResults searchResults={searchResults} />}> </Route>
      </Routes>
      <Footer />
    </>
  )
}






