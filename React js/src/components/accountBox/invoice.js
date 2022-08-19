// import “bootstrap/dist/bootstrap.min.css”;
// import “~bootstrap/scss/bootstrap”;
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/js/bootstrap.bundle';
import Notes from "./Notes";
import Footer from "./Footer";
import Table from "./Table";
import Header from "./Header";
import MainDetails from "./MainDetails";
import ClientDetails from "./ClientDetails";
import Dates from "./Dates";
import {useState, useRef} from "react";
import "./invoice.css";
import TableForm from "./TableForm";
import ReactToPrint from "react-to-print";
import { WhatsappShareButton, EmailShareButton } from "react-share";
import {WhatsappIcon, EmailIcon} from "react-share";
function Invoice(){
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
    const [utility, setUtility] =useState("")
    const [month, setMonth]=useState("")
    const [usage, setUsage]=useState("")
    const [price, setPrice]=useState("")
    const [amount, setAmount]=useState("")
    const [list, setList] = useState([])
    const [total, setTotal] = useState(0)
    
    const componentRef = useRef()

    const handlePrint=()=>{
        window.print()
    }
    return(
        <>

       
        <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow">
           {showInvoice ?  (
          <>
          <div className="d-flex align-items-end justify-content-end">
          <EmailShareButton
                subject="Electricity bill"
                body={"Dear "+name+", \nBillEzy sharing your Electricity bill... Kindly Pay the amount at the earliest.\n"}
                url={"\n Bill amount : " + total.toLocaleString()}
                >
            <EmailIcon fillColor="white" round={true}>

            </EmailIcon>
           </EmailShareButton>

            <WhatsappShareButton
                title={" Dear " +name+ ",\n BillEzy sharing your Electricity bill... Kindly pay the amount at the earliest.\n"} 
                url={"\n Bill amount : " + total.toLocaleString()}
                 >
                <WhatsappIcon fillColor="white" round={true} >

                </WhatsappIcon>
            </WhatsappShareButton>            
          
           <ReactToPrint 
            trigger={() => 
                <button className="m-5 mt-5 mb-3 btn-outline-primary text-gray fw-bold py-2 px-8 rounded shadow border-2 border-primary hover:bg-transparent hover:text-primary-500 transition-all duration-300 ">Print / Download</button>} content= {() => componentRef.current } />
          </div>
            <div ref={componentRef} className="p-5">
           <Header handlePrint={handlePrint} />           
            <MainDetails name={name} address={address} />
            <ClientDetails clientName={clientName} clientAddress={clientAddress} />
            <Dates invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate} />
            <Table 
                utility={utility} 
                month={month}
                usage={usage}
                price={price}
                amount={amount}
                list={list}
                setList={setList}
                total={total}
                setTotal={setTotal}
                />
            <Notes notes={notes} />
            <Footer 
                name={name} 
                email={email}
                phone={phone}
                bankAccount={bankAccount}
                bankName={bankName} />
                </div> 
            <button onClick={()=>setShowInvoice(false)} className="mt-5 bg-primary text-white fw-bold py-2 px-8 rounded shadow border border-primary hover:bg-transparent hover:text-primary transition-all duration-300">Edit Invoice</button>
          
          </> 
           
           ) : (
            <>
            <div className="container d-flex flex-column justify-content-center">
                <div className="row" >
                    <div className="col-sm d-flex flex-column">
                        <label htmlFor="name">Enter Flat's name </label>
                        <input type="text" 
                        name="text" id="text"
                        placeholder="Enter your name" 
                        autoComplete="off" value={name} 
                        onChange={(e)=>setName(e.target.value) }/> 
                    </div>
                    <div className="col-sm d-flex flex-column">
                        <label htmlFor="address">Enter the address </label>
                        <input type="text" 
                        name="text" 
                        id="address" 
                        placeholder="Enter your address" 
                        autoComplete="off" 
                        value={address} 
                        onChange={(e)=>setAddress(e.target.value) }/>

                    </div>
                </div>

                <div className="row">
                    <div className="col-sm d-flex flex-column">
                    <label htmlFor="email">Enter email </label>
                    <input type="email" 
                    name="email" 
                    id="email" 
                    placeholder="Enter your email" 
                    autoComplete="off" 
                    value={email} 
                    onChange={(e)=>setEmail(e.target.value) }/>
                    </div>
                    <div className="col-sm d-flex flex-column">
                    <label htmlFor="phone">Enter Phone number</label>
                    <input type="text" 
                    name="phone" 
                    id="phone" 
                    placeholder="Enter your phone number" 
                    autoComplete="off" 
                    value={phone} 
                    onChange={(e)=>setPhone(e.target.value) }/>
                    </div>
                </div>


                <div className="row">
                    <div className="col-sm d-flex flex-column">                
                
                    <label htmlFor="bankName">Enter Bank Name </label>
                    <input type="text" 
                    name="bankName" 
                    id="bankName" 
                    placeholder="Enter your bankName" 
                    autoComplete="off" 
                    value={bankName} 
                    onChange={(e)=>setBankName(e.target.value) }/>
                    </div>
                    <div className="col-sm d-flex flex-column">

                        <label htmlFor="bankAccount">Enter Bank Account number </label>
                        <input type="text" 
                        name="bankAccount" 
                        id="bankAccount" 
                        placeholder="Enter your bank account number" 
                        autoComplete="off" 
                        value={bankAccount} 
                        onChange={(e)=>setBankAccount(e.target.value) }/>
                    </div>
                </div>


                <div className="row">
                    <div className="col-sm d-flex flex-column">
                        <label htmlFor="clientName">Enter User's name </label>
                        <input type="text" 
                        name="clientName" 
                        id="clientName" 
                        placeholder="Enter your client name" 
                        autoComplete="off" 
                        value={clientName} 
                        onChange={(e)=>setClientName(e.target.value) }/>
                    </div>
                    <div className="col-sm d-flex flex-column">

                        <label htmlFor="clientAddress">Enter User's address </label>
                        <input type="text" 
                        name="clientAddress" 
                        id="clientAddress" 
                        placeholder="Enter your client address" 
                        autoComplete="off" 
                        value={clientAddress} 
                        onChange={(e)=>setClientAddress(e.target.value) }/>
                    </div>
                </div>
                <div className="row">
                    {/* <div className="col-sm d-flex flex-column">
                
                        <label htmlFor="invoiceNumber">Enter Invoice Number </label>
                        <input type="text" 
                        name="invoiceNumber" 
                        id="invoiceNumber" 
                        placeholder="Enter your invoice number " 
                        autoComplete="off" 
                        value={invoiceNumber} 
                        onChange={(e)=>setInvoiceNumber(e.target.value) }/>
                    </div> */}
               
            </div>
            <article>
                <TableForm 
                    utility={utility} 
                    setUtility={setUtility} 
                    month={month} 
                    setMonth={setMonth} 
                    usage={usage} 
                    setUsage={setUsage} 
                    price={price} 
                    setPrice={setPrice}
                    amount={amount} 
                    setAmount={setAmount} 
                    list={list}
                    setList={setList}
                    total={total}
                    setTotal={setTotal}
                    /> 
                    
            </article>
            <div className="row">
                    <div className="col-sm d-flex flex-column">
                        <label htmlFor="notes">Additional notes</label>
                        <textarea name="notes" id="notes" cols="30" rows="10" placeholder="Additional notes to the client" value={notes} onChange={(e) => setNotes(e.target.value)}></textarea> 
                    </div>
            </div>
            <div className="row">
                    <div className="col-sm d-flex flex-column">
                        <button onClick={()=>setShowInvoice(true)} className="bg-primary text-white fw-bold py-2 px-8 rounded shadow border border-primary hover:bg-transparent hover:text-primary transition-all duration-300">Preview Invoice</button>
                    </div>
            </div>
        </div>
        </>
        )}
        </main>
       
        </>
    );
}
export default Invoice;