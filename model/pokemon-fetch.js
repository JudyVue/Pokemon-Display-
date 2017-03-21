(function(module){
  'use strict';

  /*global pokemonView superagent:true*/

  let pokemon = {};
  module.pokemon = pokemon;

  let pokemonURL = 'http://pokeapi.co/api/v2/pokemon';

  let collection = [];

  function Pokemon(opts){
    this.name = opts.name;
    this.species = opts.species.name;
    this.weight = opts.weight;
    this.height = opts.height;
    if(opts.types[1]){
      this.types = `${opts.types[0].type.name}, ${opts.types[1].type.name}`;
    } else {
      this.types = opts.types[0].type.name;
    }
    this.abilities = opts.abilities.map(a => a.ability.name);
    collection.push(this);
  }


  pokemon.fetchData = (num) => {
    for (let i = num; i <= num + 4; i++){
      superagent.get(`${pokemonURL}/${i}`)
      .then(res => {
        let pokemon = new Pokemon(res.body);
        let viewObj = pokemonView.render('.pokemon-template', pokemon);
        pokemonView.appendData('.pokemon-container', viewObj);
      });
    }
  };

})(window);
