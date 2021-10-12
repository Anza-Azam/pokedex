import { useState } from "react";

const CaughtPokemon = (props) => {
  let pokemons = ["pokemon1", "pokemon2", "pokemon3", "pokemon4"];
  let [Caught, setCaught] = useState(0);
  const isCaught = () => {
    setCaught((Caught = Math.floor(Math.random() * pokemons.length)));
 };
  return (
    <div>
      <p>Caught these Pokemon on {props.date}</p>
      <button onClick={() =>isCaught()}>
      Catch pokemon </button>
    <ul>
        <li> {pokemons[Caught]}</li>
            </ul>
    </div>
  );
};

export default CaughtPokemon;