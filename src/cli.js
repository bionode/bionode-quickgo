#!/usr/bin/env node

'use strict';

const commandLineArgs = require('command-line-args')

const quickgo = require('./quickgo')

let cli = commandLineArgs([
  {name: 'gannotation', alias: 'a', type: Boolean},
  {name: 'gterm', alias: 't', type: Boolean},
  {name: 'goid', type: String},
  {name: 'format', type: String}
])

const opts = cli.parse()

if (opts.gannotation) {
  quickgo.GAnnotation(opts).pipe(process.stdout)
} else if (opts.gterm) {
  opts.id = opts.goid
  quickgo.GTerm(opts).pipe(process.stdout)
}
