
const BestPokemon = (props) => {
  return (
    <div>
      <p>My favorite Pokemon is Squirtle</p>
      <button onClick={props.poke}>clickme</button>
      <ul>
        {props.abilities.map((ability,index) => {
            return <li key={index}>{ability}</li>;
        })}
      </ul>
    </div>
  );
};

export default BestPokemon;