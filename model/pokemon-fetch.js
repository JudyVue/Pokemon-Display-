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
    this.species = opts.species.name;
    this.weight = opts.weight;
    this.height = opts.height;
    //displays a comma separated list of the Pokemon's types
    this.types = opts.types.map(t => t.type.name);
    //grab the ability names to show as comma separated list
    this.abilities = opts.abilities.map(a => a.ability.name);
  }


  pokemon.fetchData = (num) => {
    //even though Superagent already returns a promise, I wrapped this in another promise as I was doing different things to "then" off the chain in the main module, but I wanted to get outside of the for loop to stop repetition. Specifically, I was trying to toggle abilities in the main module and make it so that only the clicked Pokemon's abilities would show. Whatever I was attempting still did not work, so I left that click functionaltiy within this function, though I'd prefer not to. Still figuring it out.
    return new Promise((resolve, reject) => {
      for (let i = num; i <= num + 4; i++){
        superagent.get(`${pokemonURL}/${i}`)
        .then(res => {

          // $('.spinner').show();

          let pokemon = new Pokemon(res.body);
          let viewObj = pokemonView.render('.pokemon-template', pokemon);
          pokemonView.appendData('.pokemon-container', viewObj);
        })
        .then(() => {
          $('td:nth-child(5)').on('click', 'span', (e) => {
            e.preventDefault();
            //TODO: Get single Pokemon's abilities to show instead of all five, $(this) isn't working the way I thought it should
            // $(this).children().find().toggle();
            $('.abilities').toggle();
          });
        })
        .catch(err => reject(err));
      }
      resolve();
    });
  };

//everthing is wrapped in an IIFE and set as a property on the window so they can have access to each other
})(window);
