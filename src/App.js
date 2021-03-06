import React from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Movies, TvShows, MovieDetails, TvShowDetails, NotFound } from './pages'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/movies/page/:page' element={<Movies />} />
          <Route path='/tvshows' element={<TvShows />} />
          <Route path='/tvshows/page/:page' element={<TvShows />} />
          <Route path='/movie/:id' element={<MovieDetails />} />
          <Route path='/tvshow/:id' element={<TvShowDetails />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
