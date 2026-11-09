import test from 'node:test';
import assert from 'node:assert/strict';
import { greet } from './greet.mjs';

test('greets the default name', () => {
  assert.equal(greet(), 'Hello, world!');
});

test('greets a supplied name', () => {
  assert.equal(greet('trial'), 'Hello, trial!');
});

