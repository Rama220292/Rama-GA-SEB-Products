// src/components/stockService.js
const TOKEN = import.meta.env.VITE_TOKEN;


export async function getAllStocks(ticker) {
  const url = `https://finnhub.io/api/v1/quote?symbol=${ticker}&token=${TOKEN}`;
 
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
    return result 

  } catch (error) {
    console.error(error.message);
  }
}

