#!/usr/bin/env node

'use strict';

var arnotif              = require('autoremotenotification');
var argv                 = require('yargs').argv;
var defaultNotif         = {title: 'Tilte', text:'Text'};
var R                    = require('ramda');
var nconf                = require('nconf');
var path                 = require('path');
var autoremoteConfigFile = path.join(__dirname, 'autoremotekey.json');
 
nconf.argv()
     .env()
     .file({ file: autoremoteConfigFile });

var apiKey = nconf.get('apikey');
var config = nconf.get('config');

if(config) {
  var data = config.split('=');
  nconf.set(data[0], data[1]);
  nconf.save(function (err) {
    if(err) {
      throw new Error(err);
    }
  });
  console.log('settings updated');
  return;
}

if(argv.m) {
  argv.text = argv.m;
}
if(argv.t) {
  argv.title = argv.t;
}

argv.key = apiKey;


arnotif(R.merge(defaultNotif, argv));
