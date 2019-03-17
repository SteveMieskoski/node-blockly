'use strict';

var Blockly = require('./_blockly')

Blockly.Arduino = require('./lib/arduino_compressed')(Blockly);

module.exports = Blockly;
