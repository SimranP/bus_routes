var finder = require('./routesFinder');
var assert = require('chai').assert;

describe("directRouteBetween",function(){
  it("should give no route when there is no direct path between two bus stops",function(){
    assert.deepEqual([],finder.directRouteBetween('SWASTIK','RED FORT'));
  })
  it("should tell the bus route which goes directly from one stop to another stop",function(){
    assert.deepEqual(['186','62B'],finder.directRouteBetween('SWASTIK','ULSOOR'));
  })
});
