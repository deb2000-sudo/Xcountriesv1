import React from 'react';
const CountryCard=()=>{

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
            
            <img src="flag.jpg" alt="flag of india" style={{
                width:"100px",
                height:"100px"
            }}/>
            <h2>India</h2>
        </div>
    )
}

export default CountryCard;