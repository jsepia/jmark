#! /usr/bin/env node

'use strict'

const markdownItOptions = {
  html: true,
  linkify: true,
  typography: true
}

const markdownItTocAndAnchorOptions = {
  toc: true,
  tocClassName: 'toc',
  anchorClassName: 'heading__anchor',
  anchorLink: true,
  wrapHeadingTextInAnchor: true,
  tocFirstLevel: 2,
  tocLastLevel: 5
}

const markdownIt = require('markdown-it')
const markdownItTocAndAnchor = require('markdown-it-toc-and-anchor').default
const markdownItWikilinks = require('markdown-it-wikilinks')()

function render(input) {
  if (!input || typeof input !== 'string') {
    return input
  }
  return markdownIt(markdownItOptions)
    .use(markdownItTocAndAnchor, markdownItTocAndAnchorOptions)
    .use(markdownItWikilinks)
    .render(input)
}

module.exports = render
