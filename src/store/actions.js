import * as types from "./mutation-types";

export const initJokes = ({ commit }) => {
  fetch("http://localhost:5000/joke", {
    method: "GET"
  })
    .then(res => res.json())
    .then(json => commit(types.INIT_JOKES, json));
};

export const addJoke = ({ commit }) => {
  fetch("http://localhost:5000/joke", {
    method: "GET"
  })
    .then(res => res.json())
    .then(json => commit(types.ADD_JOKE, json));
};
