import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function Pokemones() {

  const url = "https://pokeapi.co/api/v2/pokemon/"
  const [pokemones , setPokemones] = useState([])
  const [name , setName] = useState([])
  
  const getData = async ()=>{
    const res = await fetch(url)
    const data = await res.json()
    setPokemones(data.results)
  }
  const navigate = useNavigate();
  const pokemonInfo = ()=>{
    navigate(`/pokemones/${name}`)
  }

  useEffect(() => {
    getData()
}, []);
   
    return (
      <div className="pokemones">
      <h1>Selecciona un Pokemon</h1>
<div className="select" >
<Form.Select  aria-label="Default select example" onChange={({target})=>{setName(target.value)}}>
      <option value="" disabled> Pokemones</option>
      {pokemones.map((pokemon)=> <option value={pokemon.name} key={pokemon.name} > {pokemon.name}</option>)}
    </Form.Select>
</div>
    <Button variant="primary" onClick={()=>{
      pokemonInfo()
    }}>Ver Detalle</Button>
    </div>
    )
  }