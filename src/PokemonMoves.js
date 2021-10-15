import React, { useEffect,useState } from "react";



function PokemonMoves(props) {

    const [pokemonData, setPokemonData] = useState(null);
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemonId}/`)
          .then((data) => data.json())
          .then((data) => setPokemonData(data));




    }, [props.pokemonId]);
   return (<div>
        { pokemonData &&(
            <>
        <p>{pokemonData.name}'s moves:</p>
        <ul>
          {pokemonData.moves.map((move, index) => {
            return <li key={index}>{move.move.name}</li>;
          })}
        </ul> </>)
    } </div>);
}

export default PokemonMoves;