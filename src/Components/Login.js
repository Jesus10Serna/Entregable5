import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import trainer from '../assets/img/trainer.png'
import pokeball from "../assets/img/pokeball.png";


const Login = () => {
  const [ userName, setUserName ] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const submit = e => {
    e.preventDefault();
    console.log(userName);
    dispatch({
      type:"GET_USERNAME",
      payload: userName
  })
  /*de esta manera se borra el store
  dispatch({
    type: "GET_USERNAME",
    payload: "",
  });*/
  //borrar el input despues del submit
  setUserName("");
  navigate("/pokedex");
  }

  return (
    <div id="App">
      <img
        src={pokeball}
        alt="animacion logo pokeball"
        className="pokemon-background"
      />
      <h1 className="title-input">
        Hello <br />
        Trainer!
      </h1>
      <img src={trainer} alt="trainer pokemon" className="trainer-img" />
      <form action="" onSubmit={submit}>
        <label htmlFor="login" id='label-login'>Give me your name to Start</label>
        <br />
        <input
          type="text"
          id="login"
          required
          placeholder="Write Your Name Poketrainer"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button className="button-submit">
          <i class="fa-solid fa-paper-plane"></i>
        </button>
      </form>
    </div>
  );
};

export default Login;