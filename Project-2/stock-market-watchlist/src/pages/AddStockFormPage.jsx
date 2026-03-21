import { useEffect, useState } from "react";
import { getStock } from "../components/stockService";
import KeyIndexPage from "./KeyIndexPage";
import AddStockForm from "../components/AddStockForm";
import WatchlistPage from "./WatchlistPage";

export default function AddStockFormPage({ watchList }){
    
    const [tickerList, setTickerList] = useState([])
    const [pricelist, setPricelist] = useState([])

    useEffect(() => {
        async function fetchData(){
            try {
                const results = await Promise.all(tickerList.map((ticker) => getStock(ticker)))
                setPricelist(results)
    
            } catch (error) {
                console.log("API Error", error)
            }
        }
    
        fetchData()
    }, [tickerList])

    const addStock = async (newTicker) => {
        setTickerList(prev => [...prev, newTicker])
        const result = await getStock(newTicker)
        setPricelist(prev => [...prev, result])
    }

    
    return (

        <>
            <h2> Add Stock </h2>

            <AddStockForm addStock = {addStock}/>

            {tickerList.map((ticker, index) => 
                (<div key = {index}>
                    <h2>{ticker}</h2>
                </div>
                ))}
        
        </>
    )

}