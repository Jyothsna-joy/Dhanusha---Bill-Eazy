
const UUID = require('uuid-int');
export default function Dates({invoiceNumber, invoiceDate, dueDate}){
    const id = 0;

    const generator = UUID(id);

    const uuid = generator.uuid();
    // const lUUID = String.format("%040d", new integer(UUID.randomUUID().toString().replace("-", ""), 16));
    var showdate=new Date();
    // var dueDate = (showdate.getDate()+15)+'/'+ (showdate.getMonth()+1)+'/'+showdate.getFullYear();
    var dt=showdate.toDateString();
    return(
        
        <>
        <article className="my-5 d-flex flex-column align-items-end justify-content-end ">
                <ul className="list-unstyled">
                    <li className="p-0"><span className="fw-bold">Invoice number : </span>{ uuid } </li>
                    <li className="bg-gray-100"><span className="fw-bold">Invoice date : </span>{ dt } </li>
                    {/* <li><span className="fw-bold">Due date : </span>{dueDate} </li> */}
                </ul>
            </article>
            
        </>
    )
}