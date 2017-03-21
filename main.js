'use strict';



/*global pokemon pokemonView:true*/

const main = () => {
  let count = 1;

  pokemon.fetchData(count);

  $('h3').hide();

  //next button click handler
  $('.next').on('click', (e) => {
    e.preventDefault();
    $('h3').hide();
    $('.pokemon-container tr').not('.header').empty();
    count+=5;
    pokemon.fetchData(count);

  });

  //prev button click handler
  $('.prev').on('click', (e) => {
    e.preventDefault();
    if(count <= 1){
      $('h3').show();
    } else {
      count-=5;
      $('.pokemon-container tr').not('.header').empty();
      pokemon.fetchData(count);
    }
  });
};


main();
