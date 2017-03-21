'use strict';


//This top level comment is here so Linter doesn't redline so-called unused vars
/*global pokemon pokemonView:true*/

//modularized function invocation in this main module
const main = () => {
  let count = 1;

  pokemon.fetchData(count);

  $('h3').hide();

  //next button click handler to retrieve next five Pokemon
  $('.next').on('click', (e) => {
    e.preventDefault();
    $('h3').hide();
    $('.pokemon-container tr').not('.header').empty();
    count+=5;
    pokemon.fetchData(count);

  });

  //prev button click handler to retrieve last five Pokemon
  $('.prev').on('click', (e) => {
    e.preventDefault();
    if(count <= 1){
      //lets user know they're on the first five Pokemon already so they can't move back
      $('h3').show();
    } else {
      count-=5;
      $('.pokemon-container tr').not('.header').empty();
      pokemon.fetchData(count);
    }
  });
};


main();
