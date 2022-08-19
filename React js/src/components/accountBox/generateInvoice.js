// import “bootstrap/dist/bootstrap.min.css”;
// import “~bootstrap/scss/bootstrap”;
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/js/bootstrap.bundle';
// import Notes from "./Notes";
import Footer from "./Footer";
// import Table from "./Table";
import Header from "./Header";
// import MainDetails from "./MainDetails";
// import ClientDetails from "./ClientDetails";
import Dates from "./Dates";
import { useParams } from "react-router-dom";
import {useState, useRef , useEffect } from "react";
import "./invoice.css";
// import TableForm from "./TableForm";
import ReactToPrint from "react-to-print";
import axios from "axios";
import { EmailShareButton, WhatsappShareButton} from "react-share";
import { EmailIcon, WhatsappIcon} from "react-share";


function GenerateInvoice(){
    const [showInvoice, setShowInvoice] =useState(false)
    const [name, setName] =useState("")
    const [address, setAddress] =useState("")
    const [email, setEmail] =useState("")
    const [phone, setPhone] =useState("")
    const [bankName, setBankName] =useState("")
    const [bankAccount, setBankAccount] =useState("")
    const [clientName, setClientName] =useState("")
    const [clientAddress, setClientAddress] =useState("")
    const [invoiceNumber, setInvoiceNumber] =useState("")
    const [invoiceDate, setInvoiceDate] =useState("")
    const [dueDate, setDueDate] =useState()
    const [notes, setNotes] =useState("")
    const [month, setMonth]=useState("")
    const [usage, setUsage]=useState("")
    const [price, setPrice]=useState("")
    const [amount, setAmount]=useState("")
    const [list, setList] = useState([])
    const [total, setTotal] = useState(0)
    const [data,setData] =useState({})
    const componentRef = useRef()
    const {id} = useParams();

    const GenerateInvoice = async()=>{
        // console.log(id);
        const response = await axios.get(`http://localhost:5000/api/getSingle/${id}`);
        // console.log(response.data)
        setData(response.data)
        // console.log(data)
        // console.log(data.usage)
       const usage=parseInt(data.usage)
       console.log(usage)
       console.log(price)
       console.log(amount.toLocaleString())

       if(usage > 0 && usage <= 40){
        setPrice(1.50)
       
    }       
    else if(usage >= 40 && usage <= 50){
        setPrice(3.15)
       
    }
    else if(usage > 50 && usage <= 100){
        setPrice(3.70)
      
    }
    else if(usage > 100 && usage <= 150){
        setPrice(4.80)
       
    }
    else if(usage > 150 && usage <= 200){
        setPrice(6.40)
       
    }   
    else if(usage > 200 && usage <= 250){
        setPrice(7.60)
        
    } 
    else{
        setPrice(8.00)
    }
    console.log(data.usage)
        console.log(price)
        setAmount(usage*price)  
        console.log(amount.toLocaleString())      
    }
    // const fetchData = async()=>{
    //     const { id } = useParams();
    //     console.log(id);
    //     const response = await axios.get(`http://localhost:5000/api/getSingle/${id}`);
    //     console.log(response.data)
    //     setData(response.data)
    //     console.log(data)
          
    // }
    useEffect(() => {
       GenerateInvoice().then();
    }, [price]);
   

    const handlePrint=()=>{
        window.print()
    }
    return(
        <>

       
        <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow">
           {/* {showInvoice ?  ( */}
          <>
          <div className="top d-flex align-items-end justify-content-end">
          {/* <EmailShareButton
                mailto={data.email}
                subject="Electrity bill"
                body="bill"
                url={"Dear Sir/Madam,\n\tBillEzy sharing your Electricity bill... Kindly pay the amount at the earliest. Electricity Usage on month "+ data.month +" : "+ data.usage +" units,\n Bill amount : " + amount.toLocaleString()}
                 >
                <EmailIcon fillColor="white" round={true} >

                </EmailIcon>
            </EmailShareButton> */}
             
      
            
           <EmailShareButton
                subject="Electricity bill"
                body={"Dear "+data.fullName+", \nBillEzy sharing your Electricity bill... Kindly Pay the amount at the earliest.\n"}
                url={"Electricity Usage on month "+ data.month + " : " + data.usage + " units,\n Bill amount : " + amount.toLocaleString() }
                >
            <EmailIcon fillColor="white" round={true}>

            </EmailIcon>
           </EmailShareButton>

            <WhatsappShareButton
                title={" Dear " +data.fullName+ ",\n BillEzy sharing your Electricity bill... Kindly pay the amount at the earliest.\n"} 
                url={"Electricity Usage on month "+ data.month +" : "+ data.usage +" units,\n Bill amount : " + amount.toLocaleString()}
                 >
                <WhatsappIcon fillColor="white" round={true} >

                </WhatsappIcon>
            </WhatsappShareButton>            
           
           

           <ReactToPrint 
            trigger={() => 
                <button className="m-2 rounded mt-5 mb-3 btn-outline-primary text-gray fw-bold py-2 px-8 shadow border-2 border-primary hover:bg-transparent hover:text-primary-500 transition-all duration-300 p-2 ">Print / Download</button>} content= {() => componentRef.current } />
          </div>
            <div ref={componentRef} className="p-5">
              
           <Header handlePrint={handlePrint} /> 
           
            {/* <MainDetails name={name} address={address} /> */}
            <section className="d-flex flex-column align-items-left justify-content-left">
                <h2 className="fw-bold text-xl text-uppercase md:text-4xl">Kent</h2>
                <p>Kent, Kakkanad</p>
            </section>

            <section className="mt-5">
                <h2 className="text-2xl text-uppercase fw-bold">{data.fullName} </h2>
                <p>{data.buildingname}, {data.buildingno} </p>
            </section>

            {/* <ClientDetails clientName={clientName} clientAddress={clientAddress} /> */}
            <Dates invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate} />

            <table width="100%">
        <thead>
                <tr className="bg-secondary">
                    <td className="fw-bold">Month</td>
                    <td className="fw-bold">Usage</td>
                    <td className="fw-bold">Price</td>
                    <td className="fw-bold">Amount</td>
                </tr>
            </thead>
                         
            <React.Fragment >
            
            <tbody>
            <tr>
                    <td>{data.month} </td>
                    <td>{data.usage} </td>
                    <td>{price} </td>
                    <td>{amount.toLocaleString()}</td>
                </tr>
            </tbody>
        
            </React.Fragment>
            
            </table>
            
            <div>
                <h2 className="d-flex align-items-end justify-content-end text-4xl text-secondary" >Rs. {amount.toLocaleString()}</h2>
            </div>
             
          
            {/* <Table
                month={month}
                usage={usage}
                price={price}
                amount={amount}
                list={list}
                setList={setList}
                total={total}
                setTotal={setTotal}
                /> */}

            <section className="notes mb-5 ">
                <p className="w-50 text-justify ">Pay bill amount within 15 days.</p>
            </section>
            {/* <Notes notes={notes} /> */}
            <Footer 
                name={name} 
                email={email}
                phone={phone}
                bankAccount={bankAccount}
                bankName={bankName} />
                </div> 
            {/* <button className="mt-5 bg-primary text-white fw-bold py-2 px-8 rounded shadow border border-primary hover:bg-transparent hover:text-primary transition-all duration-300">Edit Invoice</button> */}
          
          </> 
           
           
        </main>
       
        </>
    );
}
export default GenerateInvoice;