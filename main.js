'use strict';



/*global pokemon pokemonView:true*/

const main = () => {
  let count = 1;
  pokemon.fetchData(count);

  $('.next').on('click', (e) => {
    e.preventDefault();
    $('.pokemon-container td').empty();

    console.log('hit??');

    count+=5;
    pokemon.fetchData(count);
  });
};


main();
