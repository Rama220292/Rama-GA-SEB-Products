import { NavLink } from "react-router-dom";

export default function NavBar () {

    return (
        <nav>
            <ul>
                <li>
                    <NavLink to ="/">Home</NavLink>
                </li>

                <li>
                    <NavLink to = '/add-stock-to-watchlist'> Add Stocks to Watchlist</NavLink>
                </li>
                
                <li>
                    <NavLink to = '/watchlist'>Watchlist</NavLink>
                </li>

                <li>
                    <NavLink to ="/keyindex">Key Indexes</NavLink>
                </li>
            </ul>


        </nav>


    )
}