import React from "react";

const MyCards = (props) => {
    console.log(props);

    return(
        <>
        <div className="card">
            <img src={props.Data.image} className="logo" alt="logo" />
            <h2>{props.Data.title}</h2>
            <p>{props.Data.desc}</p>
        </div>
        </>
    )
}

export default MyCards;
