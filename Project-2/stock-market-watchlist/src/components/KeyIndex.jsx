import { useEffect, useState } from "react";
import { getStock } from "./stockService";

export default function KeyIndex({ indexes , keyIndexName }){
    

    if (!indexes.length) {
        return (<p>Loading...</p>)
    }

    return (
    <>
      {indexes.map((stock, i) => (
        <div key = {i}>
            <h1>{keyIndexName[i]}</h1>
            <p>Price: {stock?.c}</p>
            <p>Daily Return: {Number(stock?.dp.toFixed(2))}%</p>
        </div>
      ))}
    </>
    )

}