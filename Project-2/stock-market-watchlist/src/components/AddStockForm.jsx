import { useState } from "react";
import { addStockToWatchlist } from "./stockService";
 
export default function AddStockForm({ addStock }){
    
    const [formData, setFormData] = useState("");

    const handleChange = (event) => {
        const ticker = event.target.value
        setFormData(ticker)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const stock = await addStockToWatchlist(formData) 
        console.log("Airtable response:", stock);
        addStock(formData)
        setFormData("")
     
    }



return (

    <> 
        <h3>Submit a stock ticker of your choice to include in your watch list</h3>

        <fieldset> 
            <form onSubmit={handleSubmit}>
            <label> Ticker: <input value = {formData} onChange={handleChange}/> </label>
            <button> Add to Watchlist </button>
            </form>
        </fieldset>

        </>
)



}