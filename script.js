const numberOfFilms = +prompt("How many films you watched?", "");

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    geners : [],
    privat : false
};

const a = prompt("Last film you watched?", ""),
      b = prompt("How you rate that film?", ""),
      c = prompt("Last film you watched?", ""),
      d = prompt("How you rate that film?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);