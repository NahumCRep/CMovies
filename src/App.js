import React from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Movies, TvShows, MovieDetails, TvShowDetails, Login } from './pages'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/tvshows' element={<TvShows />} />
        <Route path='/movie/:id' element={<MovieDetails />} />
        <Route path='/tvshow/:id' element={<TvShowDetails />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
