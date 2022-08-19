import React from 'react';
const Pagination = ({totalPages,handleClick}) =>{
    console.log(totalPages)
    const pages=[...Array(totalPages).keys()].map(num=>num+1);
    console.log(pages)
    return(
        <div>
            {pages.map(num => (
                <button className="btn btn-outline-secondary m-1 text-primary underlined " style={{backgroundColor:"ash", color: "black", fontSize:'14px' }}
                key={num}
                onClick={()=>handleClick(num)}>{num}</button>
            ))}
        </div>
    )
}
export default Pagination;