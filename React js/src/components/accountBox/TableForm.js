import { List } from "@mui/material"
import React, { useState, useEffect } from "react"
import {v4 as uuidv4} from "uuid"
import {AiOutlineDelete, AiOutlineEdit} from "react-icons/ai"
import EditIcon from '@mui/icons-material/Edit';
import "./TableForm.css"
export default function TableForm({
    month, 
    setMonth, 
    usage, 
    setUsage, 
    price, 
    setPrice, 
    amount, 
    setAmount,
    list,
    setList,
    total,
    setTotal 
}){
    const [isEditing, setIsEditing] = useState(false);
    const handleSubmit = (e) =>{
        e.preventDefault()
        
        if(!month || !usage || !price ){
            alert("Please fill in all inputs")
        }
        else{
            const newItems = {
                id: uuidv4(),
                month,
                usage,
                price,
                amount
            }
            setMonth("")
            setUsage("")
            setPrice("")
            setAmount("")
            setList([...list,newItems])
            setIsEditing(false)
            console.log(list)
        }

    }
    useEffect(()=>{
        const calculateAmount = (amount) => {
            setAmount(usage*price)
        }
        calculateAmount(amount)
    }, [amount, price, usage, month, setAmount])


    useEffect(() =>{
        let rows = document.querySelectorAll(".amount")
        let sum=0
    
        for( let i=0; i<rows.length; i++){
            if(rows[i].className === "amount"){
                sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML)
                setTotal(sum)
            }
        }
     
    })
    const editRow = (id) => {
        const editingRow=list.find((row) => row.id === id)
        setList(list.filter((row) => row.id !== id))
        setIsEditing(true)
        setMonth(editingRow.month)
        setUsage(editingRow.usage)
        setPrice(editingRow.price)

    }

    const deleteRow = (id) => setList(list.filter((row) => row.id !== id))
        
    

    return(
        <>
        <form onSubmit={handleSubmit}>
        
        <div className="col-sm d-flex flex-column">
                    <label htmlFor="month">Month </label>
                    <input type="text" 
                    name="month" 
                    id="month" 
                    placeholder="Month " 
                    autoComplete="off" 
                    value={month}
                  
                    onChange={(e)=>setMonth(e.target.value) }/>
        </div>

        <div className="col-sm d-flex flex-column">
                    <label htmlFor="usage">Usage </label>
                    <input type="text" 
                    name="usage" 
                    id="usage" 
                    placeholder="usage " 
                    autoComplete="off" 
                    value={usage}
                
                    onChange={(e)=>setUsage(e.target.value) }/>
        </div>
        <div className="col-sm d-flex flex-column">
                    <label htmlFor="price">Price </label>
                    <input type="text" 
                    name="price" 
                    id="price" 
                    placeholder="price " 
                    autoComplete="off" 
                    value={price}
       
                    onChange={(e)=>setPrice(e.target.value) }/>
        </div>
        <div className="col-sm d-flex flex-column">
                    <label htmlFor="amount">Amount </label>
                    <p>{amount}</p>
        </div>
        <button className="btn btn-outline-primary fw-bold mb-5 rounded shadow border-2 border-primary-500" type="submit">
            {isEditing ? "Edit Details" : "Add Details"}
        </button>
        </form>
     
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
                    <td className="amount">{amount}</td>
                    <td><button className="button" onClick={() => deleteRow(id)}><AiOutlineDelete className=" fw-bold text-xl" /></button></td>
                    <td><button className="button" onClick={() => editRow(id)}><EditIcon/></button></td>
                </tr>
            </tbody>
        
            </React.Fragment>
            ))}
            </table>

            <div>
                <h2 className="text-4xl text-secondary" >Rs. {total.toLocaleString()}</h2>
            </div>
      
        </>
    )
}

