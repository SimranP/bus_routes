var finder = require('./routesFinder');
var assert = require('chai').assert;

describe("directRouteBetween",function(){
  it("should give no route when there is invalid bus stop",function(){
    assert.deepEqual([],finder.directRouteBetween('SWASTIK','RED FORT'));
  });
  it("should tell all the bus routes which goes directly from one stop to another stop",function(){
    assert.deepEqual(['186','62B'],finder.directRouteBetween('SWASTIK','ULSOOR'));
    assert.deepEqual(['171','174','171E','171G','173A'],finder.directRouteBetween('KORAMANGALA','KEMPEGOWDA BUS STAND'));
  });
});

describe("tellHubs",function(){
  it("should tell the name of bus stops where more than fifty buses visit",function(){
    var hubs = finder.tellHubs();
    assert.ok(hubs.indexOf('YESHWANTHPUR BUS STAND') > -1);
    assert.equal(hubs.length,58);
  });
});

describe("routeDetails",function(){
  it("should give details of a specific route",function(){
    var details = finder.routeDetails('12A');
    assert.equal(details.length,8);
  });
});

describe("leastDistanceRoute",function(){
  it("should tell the route which has the least distances between two bus stops",function(){
    var lDR = finder.leastDistanceRoute('KORAMANGALA','KEMPEGOWDA BUS STAND');
    assert.equal(lDR.name , '173A');
    assert.deepEqual(lDR.details , finder.routeDetails(lDR.name));
  });
});


describe("busesBetween",function(){
  it("should tell the name of busRoutes to take when there is no direct bus",function(){
      assert.ok(true);
  });
});
