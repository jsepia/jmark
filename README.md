# JMark

[![Build Status](https://travis-ci.org/jsepia/jmark.svg?branch=master)](https://travis-ci.org/jsepia/jmark) [![Coverage Status](https://coveralls.io/repos/github/jsepia/jmark/badge.svg?branch=master)](https://coveralls.io/github/jsepia/jmark?branch=master)

A wrapper for [markdown-it](https://github.com/markdown-it/markdown-it) that adds command line functionality and some custom rendering.

This utility is meant for personal use; I've hardcoded my preferred settings into the tool with no regards to who else may use it. If you wanted to customize this tool for your own purposes, the cleanest way to do it would be to fork this package.

## Features

  * TOCs (via [markdown-it-toc-and-anchor](https://github.com/MoOx/markdown-it-toc-and-anchor))
  * Wiki links (custom)

## Usage

**package.json**

```js
{
    "name": "my-package",
    "scripts": {
        "build-documentation": "jmark src/inputFile.md > dist/outputFile.html"
    },
    "dependencies": {
        "jmark": "git+https://github.com/jsepia/jmark.git"
    }
}
```

**Command line**

    $ npm run build-documentation

You could always install it globally too:

    npm -g install git+https://github.com/jsepia/jmark.git

## FAQ

Why markdown-it? Because I tried both remarkable and marked, and determined that implementing my wikicode parser on either of them would have been too much effort.
