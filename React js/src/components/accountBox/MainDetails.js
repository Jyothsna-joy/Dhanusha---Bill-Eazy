export default function MainDetails({name, address}){
    return(
        <>
         <section className="d-flex flex-column align-items-left justify-content-left">
                <h2 className="fw-bold text-xl text-uppercase md:text-4xl">{name}</h2>
                <p>{address}</p>
            </section>
           
        </>
    )
}