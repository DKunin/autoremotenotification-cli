#!/usr/bin/env node

'use strict';

var arnotif      = require('autoremotenotification');
var argv         = require('yargs').argv;
var defaultNotif = {title: 'Tilte', text:'Text'};
var R            = require('ramda');

if(argv.m) {
  argv.text = argv.m;
}
if(argv.t) {
  argv.title = argv.t;
}
if(argv.k) {
  argv.key = argv.k;
}

arnotif(R.merge(defaultNotif, argv));
