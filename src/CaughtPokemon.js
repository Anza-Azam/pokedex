import { useState } from "react";

const CaughtPokemon = (props) => {
  let pokemons = ["pokemon0", "pokemon1", "pokemon2", "pokemon3","pokemon4"];
  let [Caught, setCaught] = useState([]);
  let [pokemonNameInput, SetpokemonNAmeInput] = useState(null);
  const handleInputChange = (e) => {
    SetpokemonNAmeInput(e.target.value);

  };
  const isCaught = () => {
   // let randomPokemon = Math.floor(Math.random() * pokemons.length);
    //setCaught(pokemons[randomPokemon]);
    setCaught(([...pokemons]).concat(pokemonNameInput));
    SetpokemonNAmeInput("");

 };
  return (
    <div>
      <p>Caught these Pokemon on {props.date}</p>
      <input
        type="text"
        value={pokemonNameInput}
        onChange={(e) => handleInputChange(e)}
      />
      <button disabled={pokemonNameInput===" " ? "disabled" : null}onClick={() => isCaught()}>Catch pokemon </button>
      <ul>
        <li> {Caught}</li>
      </ul>
    </div>
  );
};

export default CaughtPokemon;