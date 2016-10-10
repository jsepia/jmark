'use strict'

const chai = require('chai')
chai.use(require('chai-string'))

const expect = chai.expect
const jmark = require('..')

describe('invalid input', function () {
  it('handles null', function () {
    const result = jmark(null)
    expect(result).to.be.null
  });
  it('handles undefined', function () {
    const result = jmark()
    expect(result).to.be.undefined
  });
  it('handles non-strings', function () {
    const result = jmark(42)
    expect(result).to.not.be.null
    expect(result).to.not.be.a('string')
    expect(result).to.equal(42)
  });
  it('handles empty strings', function () {
    const result = jmark('')
    expect(result).to.not.be.null
    expect(result).to.be.a('string')
    expect(result).to.equal('')
  });
});

describe('basic Markdown expectations', function () {
  it('wraps text in paragraphs', function () {
    const result = jmark('Lorem et ipsum dolor sit amet')
    expect(result).to.not.be.null
    expect(result).to.startWith('<p>')
    expect(result).to.endWith('</p>\n')
  });
  it('does formatting', function () {
    for (let i=1, octothorpes=''; i<=6; i++) {
      octothorpes += '#'
      expect(jmark(`${octothorpes} Heading`)).to.contain(`<h${i}`)
    }
    expect(jmark('**bold**')).to.contain('<strong>')
    expect(jmark('*italic*')).to.contain('<em>')
    expect(jmark('`code`')).to.contain('<code>')
  });
});

describe('wiki links', function () {
  it('renders relative wiki links', function () {
    const result = jmark('[[Main Page]]')
    expect(result).to.not.be.null
    expect(result).to.contain('<a href="./Main_Page.html">Main Page</a>')
  });
  it('renders relative wiki links with slashes', function () {
    const result = jmark('[[Main Page/Subpage]]')
    expect(result).to.not.be.null
    expect(result).to.contain('<a href="./Main_Page/Subpage.html">Main Page/Subpage</a>')
  });
  it('renders piped relative wiki links', function () {
    const result = jmark('[[Main Page|click here]]')
    expect(result).to.not.be.null
    expect(result).to.contain('<a href="./Main_Page.html">click here</a>')
  });
  it('renders piped relative wiki links with slashes', function () {
    const result = jmark('[[Main Page/Subpage|click here]]')
    expect(result).to.not.be.null
    expect(result).to.contain('<a href="./Main_Page/Subpage.html">click here</a>')
  });
  it('renders absolute wiki links', function () {
    const result = jmark('[[/Main Page]]')
    expect(result).to.not.be.null
    expect(result).to.contain('<a href="/Main_Page.html">/Main Page</a>')
  });
  it('renders absolute wiki links with slashes', function () {
    const result = jmark('[[/Main Page/Subpage]]')
    expect(result).to.not.be.null
    expect(result).to.contain('<a href="/Main_Page/Subpage.html">/Main Page/Subpage</a>')
  });
  it('renders piped absolute wiki links', function () {
    const result = jmark('[[/Main Page|click here]]')
    expect(result).to.not.be.null
    expect(result).to.contain('<a href="/Main_Page.html">click here</a>')
  });
  it('renders piped absolute wiki links with slashes', function () {
    const result = jmark('[[/Main Page/Subpage|click here]]')
    expect(result).to.not.be.null
    expect(result).to.contain('<a href="/Main_Page/Subpage.html">click here</a>')
  });
});
