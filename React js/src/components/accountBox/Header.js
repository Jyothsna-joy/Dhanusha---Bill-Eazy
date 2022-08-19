export default function Header({handlePrint}){
    return(
        <>
        <header className="d-flex mb-5 flex-row justify-content-center">
            <div>
            <h1 className=" font-bold text-uppercase tracking-wide fw-bold text-4xl mb-3 flex-column">BillEzy Invoice</h1>
            </div>
            {/* <div >
                <ul className="d-flex align-items-end justify-content-end flex-wrap list-unstyled" >
                   <li> <button className="mt-5 btn-outline-secondary text-gray fw-bold py-2 px-8 rounded shadow border-2 border-secondary hover:bg-transparent hover:text-primary-500 transition-all duration-300 " onClick={handlePrint}>&nbsp;Print&nbsp;</button></li>&nbsp;&nbsp;
                   <li><button className=" mt-5 btn-outline-primary text-blue fw-bold py-2 px-8 rounded shadow border-2 border-primary hover:bg-transparent hover:text-primary-500 transition-all duration-300 ">&nbsp;Download&nbsp;</button></li>&nbsp;&nbsp;
                   <li> <button className="mt-5 btn-outline-success text-green fw-bold py-2 px-8 rounded shadow border-2 border-success hover:bg-transparent hover:text-success-500 transition-all duration-300 ">&nbsp;Send&nbsp;</button></li>&nbsp;&nbsp;
                </ul>
            </div> */}
            </header>
            
        </>
    );
}
