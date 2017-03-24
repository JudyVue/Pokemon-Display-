(function(module){
  'use strict';

  //This top level comment is here so Linter doesn't redline so-called unused vars

  /*global pokemonView superagent:true*/

  let pokemon = {};
  module.pokemon = pokemon;

  let pokemonURL = 'http://pokeapi.co/api/v2/pokemon';

  //created constructor function to instantiate new objects from data so I could have an easier time templating it with my own formatted properties
  function Pokemon(opts){
    this.name = opts.name;
    this.weight = opts.weight;
    this.height = opts.height;
    //displays a comma separated list of the Pokemon's types
    this.types = opts.types.map(t => ` ${t.type.name}`);
    //grab the ability names to show as comma separated list
    this.abilities = opts.abilities.map(a => ` ${a.ability.name}`);
  }

  pokemon.fetchData = (num) => {
    return new Promise((resolve, reject) => {
      for (let i = num; i <= num + 4; i++){
        superagent.get(`${pokemonURL}/${i}/`)
        .then(res => {

          //TODO: Figuring out how to get spinner to hide when info is rendered
          // $('.spinner').show();

          let pokemon = new Pokemon(res.body);
          let viewObj = pokemonView.render('.pokemon-template', pokemon);
          pokemonView.appendData('tbody', viewObj);
        })
        .catch(err => reject(err));
      }
      resolve();
    });
  };

//everthing is wrapped in an IIFE and set as a property on the window so they can have access to each other
})(window);
