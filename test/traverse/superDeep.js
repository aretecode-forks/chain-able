var test = require('ava')
var {traverse, deepEqual} = require('./')
// var deepEqual = require('./lib/deep_equal')

test('super_deep', t => {
  // var util = require('util')
  var a0 = make()
  var a1 = make()
  t.truthy(deepEqual(a0, a1))

  a0.c.d.moo = true
  t.truthy(!deepEqual(a0, a1))

  a1.c.d.moo = true
  t.truthy(deepEqual(a0, a1))

  // TODO: this one
  //a0.c.a = a1;
  //t.truthy(!deepEqual(a0, a1));
  t.pass()
})

function make() {
  var a = {self: 'a'}
  var b = {self: 'b'}
  var c = {self: 'c'}
  var d = {self: 'd'}
  var e = {self: 'e'}

  a.a = a
  a.b = b
  a.c = c

  b.a = a
  b.b = b
  b.c = c

  c.a = a
  c.b = b
  c.c = c
  c.d = d

  d.a = a
  d.b = b
  d.c = c
  d.d = d
  d.e = e

  e.a = a
  e.b = b
  e.c = c
  e.d = d
  e.e = e

  return a
}
