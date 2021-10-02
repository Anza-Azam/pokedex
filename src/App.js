import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";

const App = () => {
  const date = new Date().toLocaleDateString();
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  return (
    <div>
      <Logo appName='Pokedex' />
      <BestPokemon abilities={abilities} />
      <CaughtPokemon date={date} />
    </div>
  );
};


export default App;
