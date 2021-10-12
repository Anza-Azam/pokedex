const Logo = (props) => {
  //console.log(props);

  return (
    <header>
      <h1> Welcome to Anza's {props.appName}</h1>
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt="Pidgey"
        onClick={props.handleClick}
      ></img>
    </header>
  );
};
export default Logo;