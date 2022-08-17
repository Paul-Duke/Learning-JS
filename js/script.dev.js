"use strict";

var numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
var personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};
var lastFilmOne = prompt('Один из последних просмотренных фильмов', ''),
    likeFilmOno = prompt('На сколько оцените его?', ''),
    lastFilmTwo = prompt('Один из последних просмотренных фильмов', ''),
    likeFilmTwo = prompt('На сколько оцените его?', '');
personalMovieDB.movies[lastFilmOne] = likeFilmOno;
personalMovieDB.movies[lastFilmTwo] = likeFilmTwo;
console.log(personalMovieDB);