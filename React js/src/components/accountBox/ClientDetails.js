export default function ClientDetails({clientName, clientAddress}){
    return(
        <>
         <section className="mt-5">
                <h2 className="text-2xl text-uppercase fw-bold">{clientName} </h2>
                <p>{clientAddress} </p>
            </section>
           
        </>
    )
}