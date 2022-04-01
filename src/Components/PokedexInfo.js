import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import pokeball from '../assets/img/pokeball.png'

const PokedexInfo = () => {
  const {id} = useParams();
  const [ pokeInfo, setPokeInfo ] = useState({})


  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => setPokeInfo(res.data));

  }, [id])
  console.log(pokeInfo);


  return (
    // container1

    <div id="fondo-info-pokemon" className={pokeInfo.types?.[0]?.type?.name}>
      <Link to="/pokedex">
        <i class="fa-solid fa-circle-chevron-left"></i>
      </Link>
      <img
        src={pokeball}
        alt="animacion logo pokeball"
        className="pokemon-background2"
      />
      <div className="container-infopoke">
        <div className="wrapper-img">
          <img
            className="img-info-pokemon"
            src={pokeInfo.sprites?.other?.dream_world?.front_default}
            alt="pokemon vista de frente"
          />
        </div>
        <br />
        <div className="wrapper-id">
          <h2 className="id-style">#{id}</h2>
        </div>
        <br />
        <div className="border-name"></div>
        <div className="border-name2"></div>
        <h1 id="title-infopoke">{pokeInfo.name}</h1>
        <p className="info-carpoke">
          <span>{pokeInfo.weight}</span>
          <br />
          Weight
        </p>
        <p className="info-carpoke">
          <span>{pokeInfo.height}</span>
          <br />
          Height
        </p>
      </div>

      {/* container 2 */}

      <div className="container2">
        <div className="border-name3"></div>
        <div className="border-name4"></div>
        <h2 id="type-title">Type</h2>
        <div className="button-type1">
          <h3>{pokeInfo.types?.[0]?.type?.name}</h3>
        </div>
        <div className="button-type2">
          <h3>{pokeInfo.types?.[1]?.type?.name}</h3>
        </div>
      </div>

      {/* container 3*/}

      <div className="container3"></div>
      <div className="border-name5"></div>
      <div className="border-name6"></div>
      <h2 id="abilities-title">Abilities</h2>
      <div className="button-abilities1">
        <h3>{pokeInfo.abilities?.[0]?.ability?.name}</h3>
      </div>
      <div className="button-abilities2">
        <h3>{pokeInfo.abilities?.[1]?.ability?.name}</h3>
      </div>

      {/* container 4 */}
      <div className="container4">
        <div className="border-name7"></div>
        <div className="border-name8"></div>
        <h2 id="state-title">State Base</h2>
        <div className="container-state">
          <div className="container-hptitle">
            <h2 className="hp-title">{pokeInfo.stats?.[0]?.stat?.name}:</h2>
          </div>
          <div id="barra-exp">
            <div id="expert-pokemon">
              <h2 className="info-exp">
                {pokeInfo.stats?.[0]?.base_stat} / 150
              </h2>
            </div>
          </div>
        </div>
        <div className="container-state">
          <div className="container-hptitle">
            <h2 className="hp-title">{pokeInfo.stats?.[1]?.stat?.name}:</h2>
          </div>
          <div id="barra-exp">
            <div id="expert-pokemon">
              <h2 className="info-exp">
                {pokeInfo.stats?.[1]?.base_stat} / 150
              </h2>
            </div>
          </div>
        </div>
        <div className="container-state">
          <div className="container-hptitle">
            <h2 className="hp-title">{pokeInfo.stats?.[2]?.stat?.name}:</h2>
          </div>
          <div id="barra-exp">
            <div id="expert-pokemon">
              <h2 className="info-exp">
                {pokeInfo.stats?.[2]?.base_stat} / 150
              </h2>
            </div>
          </div>
        </div>
        <div className="container-state">
          <div className="container-hptitle">
            <h2 className="hp-title">{pokeInfo.stats?.[5]?.stat?.name}:</h2>
          </div>
          <div id="barra-exp">
            <div id="expert-pokemon">
              <h2 className="info-exp">
                {pokeInfo.stats?.[5]?.base_stat} / 150
              </h2>
            </div>
          </div>
        </div>

        {/* container 5 */}
        <div className="container5"></div>
        <div className="border-name9"></div>
        <div className="border-name10"></div>
        <h2 id="movement-title">Movements</h2>
        {/* //movements */}
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[0]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[1]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[2]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[3]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[4]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[5]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[6]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[7]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[8]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[9]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[10]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[11]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[12]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[13]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[14]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[15]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[16]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[17]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[18]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[19]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[20]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[21]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[22]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[23]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[24]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[25]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[26]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[27]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[28]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[29]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[30]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[31]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[32]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[33]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[34]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[35]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[36]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[37]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[38]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[39]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[40]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[41]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[42]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[43]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[44]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[45]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[46]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[47]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[48]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[49]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[50]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[51]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[52]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[53]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[54]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[55]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[56]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[57]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[58]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[59]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[60]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[61]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[62]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[63]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[64]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[65]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[66]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[67]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[68]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[69]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[70]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[71]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[72]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[73]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[74]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[75]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[76]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[77]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[78]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[79]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[80]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[81]?.move?.name}</h2>
        </div>
        <div className="movent-wrapper">
          <h2 className="movement-name">{pokeInfo.moves?.[82]?.move?.name}</h2>
        </div>
      </div>
    </div>
  );
};

export default PokedexInfo;