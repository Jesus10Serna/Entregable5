import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



const PokemonCards = ({pokemonUrl}) => {
  const [ pokemons, setPokemons] = useState({});

  useEffect(() => {
    axios.get(pokemonUrl)
      .then((res) => setPokemons(res.data))

  }, [pokemonUrl])


    return (
      <div>
        <div className="container">
          <li
            id="card-container"
            className={`border-${pokemons.types?.[0]?.type?.name}`}
          >
            <div
              id="container-img"
              className={pokemons.types?.[0]?.type?.name}
            ></div>
            <img
              className="imagenes-pokemon"
              src={pokemons.sprites?.other?.dream_world?.front_default}
              alt="pokemones visto de frente"
            />
            <div id="title-pokemons">
              <h1 className={`contorn-${pokemons.types?.[0]?.type?.name}`}>
                {pokemons?.name}
              </h1>
            </div>

            <h3 className="pokemon-type">
              {pokemons.types?.[0]?.type?.name}
              <span> {pokemons.types?.[1]?.type?.name}</span>
            </h3>
            <p className="type">Tipo</p>
            <div className="border-card"></div>
            <br />
            <br />

            {/* stats */}

            <div id="estatus-container">
              <p className="estatus-pokemon">
                {pokemons.stats?.[0].stat?.name} <br />
                <span className={`color-${pokemons.types?.[0]?.type?.name}`}>
                  {pokemons.stats?.[0]?.base_stat}
                </span>
              </p>

              <p className="estatus-pokemon">
                {pokemons.stats?.[1].stat?.name} <br />
                <span className={`color-${pokemons.types?.[0]?.type?.name}`}>
                  {pokemons.stats?.[1]?.base_stat}
                </span>
              </p>

              <p className="estatus-pokemon">
                {pokemons.stats?.[2].stat?.name} <br />
                <span className={`color-${pokemons.types?.[0]?.type?.name}`}>
                  {pokemons.stats?.[2]?.base_stat}
                </span>
              </p>

              <p className="estatus-pokemon">
                {pokemons.stats?.[5].stat?.name} <br />
                <span className={`color-${pokemons.types?.[0]?.type?.name}`}>
                  {pokemons.stats?.[5]?.base_stat}
                </span>
              </p>
            </div>

            <Link id="link-pokemon" to={`/pokedex/${pokemons.id}`}>
              <i class="fa-solid fa-circle-chevron-right"></i>
            </Link>
          </li>
        </div>
      </div>
    );
};

export default PokemonCards;