(function(module){
  'use strict';

  /*global superagent:true*/

  let pokemon = {};
  module.pokemon = pokemon

  let pokemonURL = 'http://pokeapi.co/api/v2/pokemon'



  let collection = [];

  function Pokemon(opts){
    this.name = opts.name;
    this.species = opts.species.name;
    this.weight = opts.weight;
    this.height = opts.height;
    //comma separated list not really working
    if(opts.types[1]){
      this.types = opts.types[0].type.name, opts.types[1].type.name;
    } else {
      this.types = opts.types[0].type.name;
    }
    this.abilities = opts.abilities;
    collection.push(this);
  }


  pokemon.fetchData = (num) => {
    for (let i = num; i <= 5; i++){
      superagent.get(`${pokemonURL}/${i}`)
      .then(res => {
        let pokemon = new Pokemon(res.body);
        let viewObj = pokemonView.render('.pokemon-template', pokemon);
        pokemonView.appendData('.pokemon-container', viewObj);
      })
    }
  }

  pokemon.fetchData(1);

  // pokemon.fetchData = (num) => {
  //   return new Promise((resolve, reject) => {
  //     if (num <= 5){
  //       superagent.get(`${pokemonURL}/${num}`)
  //       .then(res => {
  //         new Pokemon(res.body);
  //       })
  //       .then(() => {
  //         num++;
  //         pokemon.fetchData(num);
  //       })
  //       .then(() => {
  //         console.log(pokemon.collection);
  //         pokemon.collection.forEach(p => {
  //           let viewObj = pokemonView.render('.pokemon-template', p);
  //           pokemonView.appendData('.pokemon-container', viewObj);
  //         })
  //
  //       })
  //       .catch(err => reject(err));
  //     }
  //   });
  // };


  //
  // pokemon.fetchData(1);
  // .then(res => console.log(res, 'hmmm'));

  // .then(() => {
  //   return pokemon.collection;
  // })
  // .then(res => {
  //   console.log(res, 'lalala');
  // })
  // .catch(err => reject(err));




})(window);
