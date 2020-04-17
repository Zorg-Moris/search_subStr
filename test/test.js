const { performance } = require('perf_hooks');
const assert = require('assert');
const { searhSubStr } = require('../src/index');
const { first, second, third } = require('./strings');
describe('Search Substring', function() {
  it('Test case First should return true', function() {
    let time = performance.now();
    const result = searhSubStr(first);
    console.log(performance.now() - time);
    assert.equal(result, true)
  });
  it('Test case Second should return false', function() {
    let time = performance.now();
    const result = searhSubStr(second);
    console.log(performance.now() - time);
    assert.equal(result, false)
  });
  it('Test case Third should return true', function() {
    let time = performance.now();
    const result = searhSubStr(third);
    console.log(performance.now() - time);
    assert.equal(result, true)
  });
});