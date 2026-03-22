export default function Watchlist({ watchlist, watchlistData, handleRemove }) {


    if (!watchlistData.length) {
        return (<p>Loading...</p>)
    }

    return (
    <>
      {watchlistData.map((stock, i) => (
        <fieldset key = {watchlist[i].id}>
            <h1>Name: {watchlist[i].fields.Name}</h1>
            <p>Price: {stock?.c}</p>
            <p>Daily Return: {Number(stock?.dp.toFixed(2))}%</p>
            <button onClick={() => handleRemove(watchlist[i].id)}>Remove from Watchlist</button>
        </fieldset>
      ))}
    </>
    )

}