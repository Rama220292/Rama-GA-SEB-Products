// src/components/stockService.js
const FINNHUB_TOKEN = import.meta.env.VITE_FINNHUB_TOKEN;
const AIRTABLE_TOKEN = import.meta.env.VITE_AIRTABLE_TOKEN  

export async function getStock(ticker) {
  const url = `https://finnhub.io/api/v1/quote?symbol=${ticker}&token=${FINNHUB_TOKEN}`;
 
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    return result 

  } catch (error) {
    console.error(error.message);
    return null
  }
}

export async function addStockToWatchlist(ticker) {
  const url = `https://api.airtable.com/v0/appuSI8OLcgauprpw/Table%201`;

  const data = {fields: {Name: ticker}}
  
  const options = {
    method: "POST",
    headers: {
      Authorization:
        `Bearer ${AIRTABLE_TOKEN}`,
        "content-type": "application/json",
    },
    body: JSON.stringify(data),
  };
 
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    return result 

  } catch (error) {
    console.error(error.message);
    return null
  }
}

export async function getWatchlist() {
  const url = `https://api.airtable.com/v0/appuSI8OLcgauprpw/Table%201`;
 
  try {
    const response = await fetch(url, {
      headers: {    
        authorization: `Bearer ${AIRTABLE_TOKEN}`,
      },
    })


    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    return result 

  } catch (error) {
    console.error(error.message);
    return null
  }
}

export async function deleteStockFromWatchlist(id) {
  const url = `https://api.airtable.com/v0/appuSI8OLcgauprpw/Table%201/${id}`;

  const options = {
    method: "DELETE",
    headers: {
      Authorization:
        `Bearer ${AIRTABLE_TOKEN}`,
    },
  };

  try {
    const response = await fetch(url, options)


    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    return result.deleted === true 

  } catch (error) {
    console.error("Airtable error:", error.message);
    return false
  }

}


