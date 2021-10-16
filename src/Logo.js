const Logo = (props) => {
  //console.log(props);

  return (
    <header>
      <h1> Welcome to Anza's {props.appName}</h1>
      <img
        src="https://tse1.mm.bing.net/th?id=OIP.VHQdrIHAJC5YrzjRAvRBBgHaHa&pid=Api&P=0&w=300&h=300"
        //https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"
        alt="Pidgey"
        onClick={props.handleClick}
      ></img>
    </header>
  );
};
export default Logo;