import React, { useState, useEffect } from "react"; // imports react and the two hooks 
import axios from "axios"
import { useNavigate } from "react-router-dom";

function SearchApp({ setSearchResults }) { // defines the component 
    const [query, setQuery] = useState(""); // 

    let navigate = useNavigate()

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     fetchData();
    // }

    const fetchData = async () => {
        await axios.get(`http://localhost:4000/posts/search/${query}`)
            .then((res) => {
                console.log(res.data.data);
                setSearchResults(res.data.data);
                navigate("/search")
            })

        
    }

    return (
        <form className="search-form" onSubmit={fetchData}>
            <input
                type="text"
                placeholder="Search..."
                onChange={(event) => setQuery(event.target.value)}
            />
            <button className="Search-btn" type="submit" variant="outline-light" onClick={(e) => { e.preventDefault(); fetchData() }}>🔍</button>
            {/* { data 
            .filter((res) => {
                if (query === ""){
                    return true;
                } else if (
                    res.name.common.toLowerCase().includes(query.toLowerCase())
                ) {
                    return true; 
                }
                return false; 
            }) */}

            {/* .map((res) => (
                <div key={res.name.common}>
                    <h1>{res.name.common}</h1>
                    <img src={res.flags.png} alt="logo" width="{200}" height="{100}" />
                    </div>
            ))} */}
        </form>
    )
}

export default SearchApp;