'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Socio = new Module('socio');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Socio.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Socio.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Socio.menus.add({
    title: 'Socio',
    link: 'socio.app',
    roles: ['all'],
    menu: 'main'
  });
  
  //Socio.aggregateAsset('css', 'socio.css');

  return Socio;
});
