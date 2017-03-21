'use strict';



/*global pokemon pokemonView:true*/

const main = () => {
  let count = 1;
  pokemon.fetchData(count);
  $('h3').hide();

  $('.next').on('click', (e) => {
    e.preventDefault();
    $('h3').hide();
    $('.pokemon-container td').empty();
    count+=5;
    pokemon.fetchData(count);
  });

  $('.prev').on('click', (e) => {
    e.preventDefault();
    if(count <= 1){
      $('h3').show();
    } else {
      count-=5;
      $('.pokemon-container td').empty();
      pokemon.fetchData(count);
    }

  });
};


main();
