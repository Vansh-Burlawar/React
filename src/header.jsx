import React from "react"
const Header=  (props)=> {
    return(
    <>
        <h1 className="Title"> Movies Center </h1>
        <div className="SearchBar">
            <input type='text' placeholder="Search here "    onChange={props.searchChange}  />
            <button className="search-button">🔍</button>
        </div>

        </>
    )

}
export default Header;