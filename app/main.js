﻿requirejs.config({
  paths: {
    'text': '../lib/require/text',
    'durandal':'../lib/durandal/js',
    'plugins' : '../lib/durandal/js/plugins',
    'transitions' : '../lib/durandal/js/transitions',
    'knockout': '../lib/knockout/knockout-3.4.0',
    'bootstrap': '../lib/bootstrap/js/bootstrap',
    'jquery': '../lib/jquery/jquery-1.9.1',
    'react': '../lib/react/react',
    'react-dom': '../lib/react/react-dom',
    'jsx': '../lib/react/jsx',
    'JSXTransformer':'../lib/react/JSXTransformer',
  },
  shim: {
    'bootstrap': {
      deps: ['jquery'],
      exports: 'jQuery'
    },
    'react': {
      exports: 'react'
    },
    'react-dom': {
      exports: 'react-dom'
    },
    'JSXTransformer': {
      exports: "JSXTransformer"
    }
  }
});

define(['durandal/system', 'durandal/app', 'durandal/viewLocator', 'bootstrap'],  function (system, app, viewLocator) {
  //>>excludeStart("build", true);
  system.debug(true);
  //>>excludeEnd("build");

  app.title = 'Durandal Starter Kit';

  app.configurePlugins({
    router:true,
    dialog: true
  });

  app.start().then(function() {
    //Replace 'viewmodels' in the moduleId with 'views' to locate the view.
    //Look for partial views in a 'views' folder in the root.
    viewLocator.useConvention();
    console.log(app.title)
    //Show the app by setting the root view model for our application with a transition.
    app.setRoot('viewmodels/shell', 'entrance');
  });
});