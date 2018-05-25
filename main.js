#!/usr/bin/env node
require('dotenv').config();
var OpenNebula = require('opennebula');
var one = new OpenNebula(process.env.ONE_CREDENTIALS, process.env.ONE_HOST);

// one.getVMs(function(err, data) {
//   console.log(data);
// });
vm = one.getVM(1);

// query API for vm info
vm.info(function (err, data) {
  console.log(data);
});

vm.action('reboot', function (err, data) {
  console.log(data);
});