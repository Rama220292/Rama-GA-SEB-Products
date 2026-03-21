// src/App.jsx
import { getStock } from './components/stockService';
import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar';
import KeyIndexPage from './pages/KeyIndexPage';
import { Routes, Route } from "react-router-dom";
import AddStockFormPage from './pages/AddStockFormPage';
import WatchlistPage from './pages/WatchlistPage';
const App = () => {
  
  return (
    <> 
      <NavBar />
      <h1>Welcome to Stocks Watchlist</h1>
      <h2>Track your favourite stocks and monitor performance.</h2>
      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />
        <Route path ='/add-stock-to-watchlist' element = {<AddStockFormPage />}/>
        <Route path = '/watchlist' element = {<WatchlistPage />} />
        <Route path ='/keyindex' element = {<KeyIndexPage />}/>

      </Routes>
      
 
    </>
  )
};

export default App;