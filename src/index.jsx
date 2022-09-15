import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './style.css';


const About = () => {
  return (
    <>
      <h2>O nás</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, ducimus.</p>
    </>
  )
}

const Contact = () => {
  return (
    <>
      <h2>Kontakt</h2>
      <p>Minus nobis ipsa delectus similique aspernatur ducimus nulla impedit, facilis illum voluptatibus?</p>
    </>
  )
}

const Home = () => {
  return (
    <>
      <h2>Uvodni stranka</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet mollitia corrupti molestiae in, iusto voluptatibus? Delectus esse doloremque aliquid dicta sint ipsum provident quis iste maiores laborum id, porro deserunt!</p>
    </>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <h1>Naše super firma</h1>
      <nav>
        <Link to="/">Úvod</Link> |
        <Link to="/about">O nás</Link> |
        <Link to="/contact">Kontakt</Link> |
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/contact" element={ <Contact /> } />
      </Routes>
    </BrowserRouter>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
