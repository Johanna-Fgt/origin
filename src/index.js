import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Education from './pages/Education';
import Experience from './pages/Xp';
import Work from './pages/Work';
import Header from './components/Header';
import Footer from './components/Footer/index';
import Error from './components/Error/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    overflow-x: hidden;
  }
  body {
    color: #32120E;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
  a{
    text-decoration: none;
    color: #32120E;
    &:hover{
      font-weight: bold;
    }
  }
  .btn{
    background-color: #6C847E;
    color: #FEF9EF;
    text-align: center;
    width: fit-content;
    font-size: .5rem;
    padding: .6rem;
    margin: .5rem;
    border-radius: 50px;
    &:hover{
      font-weight: normal;
      background-color: #BC533B;
    }
  }
::-webkit-scrollbar {
  width: 15px;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 1px #32120E; 
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background: rgb(108,132,126);
  background: linear-gradient(0deg, rgba(108,132,126,1) 0%, rgba(254,249,239,1) 100%);
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: rgb(188,83,59);
  background: linear-gradient(184deg, rgba(188,83,59,1) 0%, rgba(254,249,239,1) 100%);
}
`
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/education' element={<Education/>}/>
        <Route path='/experience' element={<Experience/>}/>
        <Route path='/work' element={<Work/>}/>
        <Route path='/contacts' element={<Footer/>}/>
        <Route path='*' element={<Error />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);