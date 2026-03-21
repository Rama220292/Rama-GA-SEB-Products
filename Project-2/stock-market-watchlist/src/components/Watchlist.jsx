export default function Watchlist({ watchlist, watchlistData }) {

    if (!watchlistData.length) {
        return (<p>Loading...</p>)
    }

    return (
    <>
      {watchlistData.map((stock, i) => (
        <fieldset key = {watchlist[i].fields.Name}>
            <h1>Name: {watchlist[i].fields.Name}</h1>
            <p>Price: {stock?.c}</p>
            <p>Daily Return: {Number(stock?.dp.toFixed(2))}%</p>
            <button>Remove from Watchlist</button>
        </fieldset>
      ))}
    </>
    )

}