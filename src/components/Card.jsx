
function Card({data}) {
    console.log(data)
    return (
        <>
            {<center>
            <div className="card mb-3" style={{"width": "250px"}}>
            <img src={data.sprites.front_default} className="card-img-top" alt={data.sprites.front_default} style={{"height":"250px", width: "250px"}} />
                <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    
                </div>
            </div> 
            </center>}
        </>
    )
}

export default Card