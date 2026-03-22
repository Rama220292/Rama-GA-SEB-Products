import { useEffect, useState } from "react";
import { getWatchlist } from "../components/stockService";
import { getStock, deleteStockFromWatchlist } from "../components/stockService";
import Watchlist from "../components/Watchlist";

export default function WatchlistPage() {

    const [watchlist, setWatchlist] = useState([])
    const [watchlistData, setWatchlistData] = useState([])

        useEffect(() => {
            async function fetchWatchlist(){
                try {
                    const results = await getWatchlist()
                    setWatchlist(results.records)
        
                } catch (error) {
                    console.log("Airtable API Error", error)
                }
            }
        
            fetchWatchlist()
        }, [])

        useEffect(() => {
            async function fetchStockData(){
            try {
                const results = await Promise.all(watchlist.map((ticker) => 
                    {const record = ticker.fields.Name;
                    if (!record){
                        return null
                    }
                    return getStock(record)}))

                setWatchlistData(results.filter(Boolean));;

            } catch (error) {
                console.log("Finnhub API Error", error)
            }
        }
    
        if (watchlist.length > 0) {
            fetchStockData()} 

        }, [watchlist])

    
     async function handleRemove(id) {

        if (await deleteStockFromWatchlist(id)) {
            setWatchlistData(prev => prev.filter((stock, i) => watchlist[i].id !== id))
            setWatchlist(prev => prev.filter(stock => stock.id !== id))
            
        }

    }
    


    return (
        <> 
            <h2> Watchlist </h2>

            <Watchlist 
            watchlist = {watchlist} 
            watchlistData = {watchlistData}
            handleRemove = {handleRemove}/>
        </>
    )

}