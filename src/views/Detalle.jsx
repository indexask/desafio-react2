import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

export default function Detalle() {
   const url = "https://pokeapi.co/api/v2/pokemon/"
   const { name } = useParams()
   const [pokemon , setPokemon] = useState([])
   const [pokemonImg, setPokemonImg] = useState([]);
   const [hp, setHp] = useState("");
   const [attack, setAttack] = useState("");
   const [defense, setDefense] = useState("");
   const [speed, setSpeed] = useState("");

   const getDataPokemon = async () => {
      const res = await fetch(url + name);
      const data = await res.json();
      console.log("esto son datos: ",data)
      setPokemon(data)
      setPokemonImg(data.sprites.other.dream_world.front_default);
      setHp(data.stats[0].base_stat);
      setAttack(data.stats[1]);
      setDefense(data.stats[2]);
      setSpeed(data.stats[5]);
    }

    useEffect(() => {
      getDataPokemon()
  }, []);



   return (
      <div className="pokemones" >
    <Card style={{ width: '23rem' }}>
      <Card.Img variant="left" src={pokemonImg} />
      <Card.Body>
        <Card.Title>{pokemon.name}</Card.Title>
        <div className="pokeText">
            <ul>
               <li>Experiencia base: {pokemon.base_experience} pts exp</li>
               <li>Altura: {pokemon.height * 10} cm</li>
               <li>Peso: {pokemon.weight * 0.50} kg</li>
               <li>HP: {hp.base_stat}</li>
               <li>Ataque: {attack.base_stat}</li>
               <li>Defensa: {defense.base_stat}</li>
               <li>Velocidad: {speed.base_stat}</li>
            </ul>
         </div>
      </Card.Body>
    </Card>
    </div>
    )
  }