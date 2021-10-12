// const numberOfFilms = +prompt("How many films you watched?", "");         

// const personalMovieDB = {
//     count : numberOfFilms,
//     movies : {},
//     actors : {},
//     geners : [],
//     privat : false
// };

// const a = prompt("Last film you watched?", ""),
//       b = prompt("How you rate that film?", ""),
//       c = prompt("Last film you watched?", ""),
//       d = prompt("How you rate that film?", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// if (4 == 9) {
//     console.log("OK!");
// } else {
//     console.log ("Error")
// // }

// const num = 50;

// if (num < 49) {
//     console.log("False");
// } else if (num > 100) {
//     console.log("Error");
// } else {
//     console.log("Ok");
// }

// (num === 50) ? console.log("Right") : console.log("Not Right");

// const num = 50;

// switch (num) {
//     case 49 : 
//         console.log("False");
//         break;
//     case 58 :
//         console.log("Not True");
//         break;
//     case 50 :
//         console.log("True");
//         break;
//     default : 
//         console.log("Not this time");
//         break;
// }

// let num = 50;

// while(num<55) {
//     console.log(num);
//     num++;
// }

// let num = 50;

// do {
//     console.log(num);
//     num++;
// } 
// while (num<55);



// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         break;
//     }

//     console.log(i);
// }

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         continue;
//     }

//     console.log(i);
// }


/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// Код возьмите из предыдущего домашнего задания


// const numberOfFilms = +prompt("How many films you watched?", "");         

// const personalMovieDB = {
//     count : numberOfFilms,
//     movies : {},
//     actors : {},
//     geners : [],
//     privat : false
// };

// const a = prompt("Last film you watched?", ""),
//       b = prompt("How you rate that film?", ""),
//       c = prompt("Last film you watched?", ""),
//       d = prompt("How you rate that film?", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

//

// for(let i = 0; i < 2; i++) {
//     const a = prompt(" rate that film?", "");

//     personalMovieDB.movies[a] = b;
// }

// console.log(personalMovieDB);

// if (4 == 5) {
//     console.log("OK");
// } else {
//     console.log("Error");
// } 

// const num = 55;

// if (num > 100) {
//     console.log("Great");
// } else if (num == 54) {
//     console.log("Super")
// } else {
//     console.log("Error");
// }

// const num = 50;

// if (num <= 1) {
//     console.log("OK");5421 
// } else {
//     console.log("Nice");
// }

// const num = 20;

// (num == 15) ? console.log("False") : console.log("True");

// const num = 50;

// switch (num) {
//     case 49: 
//         console.log("False");
//         break;
//     case 100: 
//         console.log("False");
//         break;
//     case 50 : 
//         console.log("Boom TRue");
//         break;
// }

// const num = 50;

// switch(num) {
//     case 49: 
//         console.log("False");
//         break;
//     case 77: 
//         console.log("Again False");
//         break;
//     case 88:
//         console.log("NOt Right");
//         break;
//     default:
//         console.log("Goal is done");
//         break;
// }

// let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }

// let num = 50;

// do {
//     console.log(num);
//     num++;
// }
// while (num < 58);

// let num = 50;

// for (let i = 10; i >= 5; i--) {
//     console.log(num);
//     num++;
// }

// let num = 50;

// for (let i = 1; i < 4; i++) {
//     console.log(num);
//     num++;
// }

// let num = 50;

// for (let i = 1; i < 10; i++) {
//     if ( i === 6) {
//         break;
//     }   
//     console.log(num);
//     num++;
// }

// let num = 50;

// for (let i = 1; i < 10; i++) {
//     if ( i === 6) {
//         continue;                            ?????????????????????????????????????
//     }   
//     console.log(num);
//     num++;    
// }

// const numberOfFilms = +prompt("How many films you watched?", "");         

// const personalMovieDB = {
//     count : numberOfFilms,
//     movies : {},
//     actors : {},
//     geners : [],
//     privat : false
// };

// const a = prompt("Last film you watched?", ""),
//       b = prompt("How you rate that film?", ""),
//       c = prompt("Last film you watched?", ""),
//       d = prompt("How you rate that film?", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// for (let i = 0; i < 2; i++) {
//     const a = prompt("Last film you watched?", ""),
//           b = prompt("How you rate that film?", "");

//     if (a != null && b != null && a != "" && b != "" && a.length < 50 ) {
//         personalMovieDB.movies[a] = b;
//         console.log("Done");
//     } else {
//         console.log("Error");
//         i--;
//     }
// }

// if (personalMovieDB.count < 10) {
//     console.log("Watch more films");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log("You are common film watcher");
// } else if (personalMovieDB.count >= 30) {
//     console.log("You are best");
// } else {
//     console.log("Error");
// }

// console.log(personalMovieDB);


// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     let num = 16;
// }

// showFirstMessage("Hello World!");
// console.log(num);

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(4, 15));
// console.log(calc(5, 35));

// function ret () {
//     let num = 50;

//     //

//     return num;
// } 

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function() {
//     console.log("Hello")
// };

// logger();


// function showFirstMessage() {
//     console.log("Hello");
// }

// showFirstMessage();

// function calc (a, b) {
//     return(a + b);
// }

// console.log(calc(5, 10));

// const calc = (a, b) => {
//     return( a + b);
    
// }
// console.log(calc(4, 9));


// const logg = "Hello World";

// console.log(logg.slice(3, 7));
// console.log(logg.substring(3, 7));
// console.log(logg.substr(3, 7));

// const num = 12.32;

// console.log(Math.round(num));
 
// const test = "12.2px";

// console.log(parseInt(test));

// console.log(parseFloat(test));


// const numberOfFilms = +prompt("How many films you watched?", "");         

// const personalMovieDB = {
//     count : numberOfFilms,
//     movies : {},
//     actors : {},
//     geners : [],
//     privat : false
// };

// const a = prompt("Last film you watched?", ""),
//       b = prompt("How you rate that film?", ""),
//       c = prompt("Last film you watched?", ""),
//       d = prompt("How you rate that film?", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);



// for(let i = 0; i < 2; i++) {
//     const a = prompt(" rate that film?", "");

//     personalMovieDB.movies[a] = b;
// }

// console.log(personalMovieDB);

            // TASK

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("How many films you watched?", "");  

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How many films you watched?", "");  
    }
}
start();