(function(module){
  'use strict';
  /*global Handlebars:true*/

  let pokemonView = {};
  module.pokemonView = pokemonView;


  pokemonView.render = function(templateID, data){
    let template = Handlebars.compile($(templateID).html());
    return template(data);
  };

  pokemonView.appendData = function(section, compiledObj){
    $(section).append(compiledObj);
  };



})(window);
