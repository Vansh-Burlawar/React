import React from "react";

const Card = (props)=> {
    return(
        <div className="card">
            <img  src={props.url} alt="" height={350} width={200}/>
            <h3>{props.name}</h3>
            <h2>{props.genre}</h2>

        </div>
    )
}

export default Card