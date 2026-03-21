import KeyIndex from "../components/KeyIndex";
import { useEffect, useState } from "react";
import { getStock } from "../components/stockService";

export default function KeyIndexPage (){

    const keyIndex = ['SPY', 'DIA', 'GLD']
    const keyIndexName = ['S&P 500', 'Dow Jones Industrial Average', 'Gold']
    const [indexes, setIndexes] = useState([]);
    
    useEffect(() => {
        async function fetchStockData(){
            try {
                const results = await Promise.all(keyIndex.map((ticker) => getStock(ticker)))
                setIndexes(results)
    
            } catch (error) {
                console.log("Finnhub API Error", error)
            }
        }
    
        fetchStockData()
    }, [])
    
    return (
        <>
            <h2> Key Indexes</h2>
        
            <KeyIndex indexes = {indexes} keyIndexName = {keyIndexName}/>
        </>
        
    )

}