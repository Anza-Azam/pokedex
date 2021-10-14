import { useState } from "react";

const CaughtPokemon = (props) => {
  let pokemons = ["pokemon0", "pokemon1", "pokemon2", "pokemon3","pokemon4"];
  let [Caught, setCaught] = useState([]);
  const isCaught = () => {
    let randomPokemon = Math.floor(Math.random() * pokemons.length);
    setCaught(pokemons[randomPokemon]);
 };
  return (
    <div>
      <p>Caught these Pokemon on {props.date}</p>
      <button onClick={() =>isCaught()}>
        Catch pokemon </button>
    <ul>
        <li> {Caught}</li>
            </ul>
    </div>
  );
};

export default CaughtPokemon;