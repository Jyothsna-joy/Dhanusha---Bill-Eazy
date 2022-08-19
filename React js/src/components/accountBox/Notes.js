import "./Notes.css";
export default function Notes({notes}){
    return(
        <>
         <section className="notes mb-5 ">
                <p className="w-50 text-justify ">{notes}</p>
            </section>
           
        </>
    )
}