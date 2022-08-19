export default function Footer(){
    return(
        <>
        <footer className="footer border-top border-gray pt-gray pt-5 ">
            <div className="row">
                <ul className=" list-unstyled d-flex align-items-center justify-content-center">
                    <li><span className="fw-bold col-sm">Name : </span>BillEzy </li>&nbsp;&nbsp;&nbsp;
                    <li><span className="fw-bold col-sm">Email : </span>billezyekm57@gmail.com </li>&nbsp;&nbsp;&nbsp;
                    <li><span className="fw-bold col-sm">Phone number : </span>8565653311 </li>&nbsp;&nbsp;&nbsp;
                </ul>
            </div>
            <div className="row">
                <ul className="list-unstyled d-flex flex-wrap align-items-center justify-content-center">
                
                    <li><span className="fw-bold">Bank : </span>State Bank of India </li>&nbsp;&nbsp;&nbsp;
                    <li><span className="fw-bold">Account holder : </span>BillEzy </li>&nbsp;&nbsp;&nbsp;
                    <li><span className="fw-bold">Account number : </span>65653333126599 </li>&nbsp;&nbsp;&nbsp;
                    {/* <li>Website : </li> */}
                </ul>
            </div>
            </footer>
        </>
    )
}