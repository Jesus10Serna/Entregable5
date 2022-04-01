import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PokemonCards from "./PokemonCards";
import pokeball from "../assets/img/pokeball.png";
import { useNavigate } from "react-router-dom";

const Pokedex = ({ itemNumbers }) => {
  const userName = useSelector((state) => state.userName);
  const navigate = useNavigate();
  const [pokemons, setPokemons] = useState([]);
  const [pokemonName, setPokemonName] = useState([]);
  const [selectPoke, setSelectPoke] = useState([]);

  // paginacion

  const [page, setPage] = useState(1);
  const lastIndex = page * itemNumbers;
  const firstIndex = lastIndex - itemNumbers;
  const pokemonPaginated = pokemons?.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(pokemons.length / itemNumbers);
  const pagesNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    if (i > page - 4 && i < page + 4) {
      pagesNumbers.push(i);
    }
  }

  // aqui pusimos todos los personajes
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126/")
      .then((res) => setPokemons(res.data.results));
      // aqui se pusieron por tipo
    axios
      .get("https://pokeapi.co/api/v2/type/")
      .then((res) => setSelectPoke(res.data.results));
  }, []);

  const submit = (e) => {
    e.preventDefault();
    navigate(`/pokedex/${pokemonName}`);
  };
  // aqui ponemos los personajes filtrados dependiendo de la informacion que queremos mostrar(mostrar tipos de pokemon)

  const handlelocation = (e) => {
    console.log(e.target.value);
    axios.get(e.target.value).then((res) => setPokemons(res.data?.pokemon));
  };
  console.log(pokemonPaginated);

  return (
    <div>
      <img
        src={pokeball}
        alt="animacion logo pokeball"
        className="pokemon-background"
      />
      <div className="wrapper-login">
        <h2 className="title-pokedex"> POKEDEX </h2>
        <h4 className="username-title">
          Welcome
          <span className="info-welcome"> {userName},</span> here you can find
          your favorite Pokemon.
        </h4>
      </div>

      {/* input de busqueda */}

        <form action="" onSubmit={submit} id="input-container">
          <input
            type="text"
            id="search-pokemon"
            placeholder="Search Pokemon Name"
            onChange={(e) => setPokemonName(e.target.value)}
            value={pokemonName}
          />
          <button id="button-search">
            <i class="fa-brands fa-searchengin"></i>
          </button>
        </form>
     

      {/* select por type*/}

      <div className="container-select">
        <select onChange={handlelocation} id="select-pokeinfo">
          <option>Selection Type</option>

          {selectPoke?.map((selectPoke) => (
            <>
              <option key={selectPoke.url} value={selectPoke.url}>
                {selectPoke.name}
              </option>
            </>
          ))}
        </select>
      </div>

      <ul className="container-grid">
        {pokemonPaginated?.map((pokemon) => (
          <>
            <PokemonCards
              key={pokemon.url ? pokemon.url : pokemon.pokemon.url}
              pokemonUrl={pokemon.url ? pokemon.url : pokemon.pokemon.url}
            />
          </>
        ))}
      </ul>
      <div className="container-page">
        <button
          id="previous-button"
          onClick={() => setPage(page - 1)}
          disabled={page <= 1}
        >
          <i class="fa-solid fa-angles-left"></i>
        </button>

        <div>
          <p id="counter-page">
            {page} / <span>{totalPages} </span>
          </p>
          {pagesNumbers.map((page) => (
            <button id="middle-button" onClick={() => setPage(page)} key={page}>
              {page}
            </button>
          ))}
        </div>

        <button
          id="next-button"
          onClick={() => setPage(page + 1)}
          disabled={page >= totalPages}
        >
          <i class="fa-solid fa-angles-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Pokedex;;