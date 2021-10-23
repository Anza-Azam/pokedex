import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";

import PokemonCity from "./src/PokemonCity.js";
import "./App.css";
// import PokemonMoves from "./src/PokemonMoves";
import PokemonMovesSelector from "./src/PokemonMovesSelector";


const App = () => {
  function logWhenClicked() {
       console.log("chicken");
  }
  function log() {
    console.log("Nuggets");

   }
  const date = new Date().toLocaleDateString();
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  return (
    <>
      <Logo appName="Pokedex" handleClick={log} poke={logWhenClicked} />
      <BestPokemon abilities={abilities} poke={logWhenClicked} />
      <CaughtPokemon date={date} />
      <PokemonMovesSelector />
      <PokemonCity />
    </>
  );
};


export default App;
