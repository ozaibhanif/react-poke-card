import { useEffect, useState } from "react";
import Card from "./Card";



function Pockemon() {

    const [data, setData] = useState('')
    const [pockemon, setPockemon] = useState([])
    const [next, setNext] = useState('')
    const [previous, setPrevious] = useState('')
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")

    useEffect(() => {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          setPockemon(data.results)
          setNext(data.next)
          setPrevious(data.previous)
          console.log(data.next, data.previous)
        })
    }, [url])

    const fetchedData = (url) =>{
      console.log(url)
        fetch(url)
        .then(response => response.json())
        .then(data => {setData(data)})
    }
    const call = (url) =>{
      setUrl(url)
    }
    return (
        <>
            <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Pockemon</button>

                <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                  <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Pockemons</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div class="offcanvas-body">
                  {pockemon && pockemon.map(item =>  <p onClick={()=> fetchedData(item.url)}>{item.name}</p>)}
                  </div>
                  <div>
                <button onClick={()=> call(previous)} className="btn btn-primary" style={{"width": "100px", "display": "inline", "margin": "15px"}}>Previous</button>
                <button onClick={()=> call(next)} className="btn btn-primary" style={{"width": "100px", "display": "inline"}}>Next</button>
                </div>
                </div>
                {data && <Card data={data}/>}
        </>
    );
}

export default Pockemon