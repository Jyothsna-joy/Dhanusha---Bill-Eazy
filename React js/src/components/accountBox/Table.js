import React from "react"
export default function Table({list, total}){
    return(
        <>
        {/* <table width="100%">
            <thead>
                <tr className="bg-secondary">
                    <td className="fw-bold">Utility</td>
                    <td className="fw-bold">Month</td>
                    <td className="fw-bold">Usage</td>
                    <td className="fw-bold">Price</td>
                    <td className="fw-bold">Amount</td>
                </tr>
            </thead>
            <tbody>
            <tr>
                    <td>{utility}</td>
                    <td>{month}</td>
                    <td>{usage}</td>
                    <td>{price}</td>
                    <td>{amount}</td>
                </tr>
            </tbody>
        </table> */}
             <table width="100%">
        <thead>
                <tr className="bg-secondary">
                    <td className="fw-bold">Month</td>
                    <td className="fw-bold">Usage</td>
                    <td className="fw-bold">Price</td>
                    <td className="fw-bold">Amount</td>
                </tr>
            </thead>
            {list.map(({ id, month, usage, price, amount}) => (
                // <React.Fragment key={id}>
                // <li key={id}>Utility : {utility}</li>
                // <li key={id}>Month : {month}</li>
                // <li key={id}>Usage : {usage}</li>
                // <li key={id}>Price : {price}</li>
                // <li key={id}>Amount : {amount}</li>
                
                // </React.Fragment>
               
            <React.Fragment key={id}>
            
            <tbody>
            <tr>
                    <td>{month}</td>
                    <td>{usage}</td>
                    <td>{price}</td>
                    <td>{amount}</td>
                </tr>
            </tbody>
        
            </React.Fragment>
            ))}
            </table>
            
            <div>
                <h2 className="d-flex align-items-end justify-content-end text-4xl text-secondary" >Rs. {total.toLocaleString()}</h2>
            </div>
      
      
        </>
    )
}