// src/App.jsx
import { getAllStocks } from './components/stockService';
import { useEffect, useState } from 'react'
import './App.css'

const App = () => {
  
  const [stock, setStock] = useState(null);

  useEffect(() => {
    async function getData(ticker) {
      const data = await getAllStocks(ticker)
      setStock(data)
    }
    getData('GOOG')
  }, [])

  return (
    <> 
      <h1>Hello world!</h1>

      {!stock ? (<p>Loading...</p>) :
      (<ul>
        <li>Stock Ticker: </li>
        <li>Stock Price: {stock.c}</li>
        <li>Daily Return: {stock.dp}</li>
      </ul>)
      }
 
    </>
  )
};

export default App;