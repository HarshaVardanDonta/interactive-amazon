import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header';
import HomePage from './components/homepage';
import Cart from './components/cart';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header/>}>
        <Route index element ={<HomePage/>}/>
        <Route path="cart" element={<Cart/>}/>
      </Route>
    </Routes>
   </BrowserRouter>
);
