import React from 'react';
const CountryCard=({
    name,flagImg,flagAltText
})=>{

    return(
        //inline css for react
        <div style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            padding:"10px",
            margin:"10px",
            border:"1px solid gray",
            borderRadius:"10px",
            width:"200px",
            height:"200px"
        }}>
            
            <img src={flagImg} alt={`flag_of ${flagAltText}`} style={{
                width:"100px",
                height:"100px"
            }}/>
            <h2>{name}</h2>
        </div>
    )
}

export default CountryCard;