(function(module){
  'use strict';

  /*global superagent:true*/

  let pokemon = {};
  module.pokemon = pokemon

  let pokemonURL = 'http://pokeapi.co/api/v2/pokemon'


  pokemon.collection = [];

  let arr = [];

  function Pokemon(opts){
    this.name = opts.name;
    this.species = opts.species.name;
    this.weight = opts.weight;
    this.height = opts.height;
    this.types = opts.types;
    this.abilities = opts.abilities;
    pokemon.collection.push(this);
  }

  return pokemon.fetchData = (num, callback = function(){}) => {
    if (num <= 5){
      superagent.get(`${pokemonURL}/${num}`)
      .then(res => {
        new Pokemon(res.body);
      })
      .then(() => {
        num++;
        pokemon.fetchData(num);
      })
      .then(() => {
        console.log(pokemon.collection, 'meh');
        return pokemon.collection;
      })
      .then((collection) => {
        callback(collection);
      })
      .catch(err => console.error(err));
    }

  };

  // pokemon.fetchData(1);

  // superagent.get(pokemonURL)
  // .then(res => {
  //   console.log(res.body);
  //   let section = res.body.results.slice(0, 5);
  //   console.log(section);
  //   return section;
  // })
  // .then(res => {
  //   res.forEach(pokemon => {
  //     console.log(pokemon.url, 'what is here???');
  //     superagent.get(pokemon.url)
  //     .then(res => {
  //       console.log(res.body, 'jaja');
  //       let newPokemon = new Pokemon(res.body);
  //       pokemon.collection.push(newPokemon);
  //       console.log(arr, 'what');
  //     })
  //     .catch(err => console.error(err));
  //   });
  // })
  // .catch(err => console.error(err));



})(window);
