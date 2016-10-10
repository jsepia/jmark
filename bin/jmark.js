#! /usr/bin/env node

'use strict'

const fs = require('fs')
const jmark = require('..')
const argv = require('yargs')
  .usage('$0 <inputFile.md>')
  .demand(1)
  .version()
  .argv

const filename = argv._[0]
const input = fs.readFileSync(filename, { encoding: 'utf8' })
console.log(jmark(input))