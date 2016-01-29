var assert = require('chai').assert;
var City = require('./busRoutes');
describe("city",function(){
  var bangaluru = new City();
  describe("addStation",function(){
    it("should introduce a new bus stop in the city",function(){
      bangaluru.addStation('SWASTIK');
      assert.ok(bangaluru.stations['SWASTIK']);
      assert.deepEqual(bangaluru.stations.SWASTIK.connectedRoutes,[]);
    });
  });
  describe("addBusRoute", function(){
    it("should introduce a bus in the city", function(){
      bangaluru.addBusRoute('1');
      assert.ok(bangaluru.buses['1']);
      assert.deepEqual(bangaluru.buses['1'],[]);
    });
  });
  describe("addStationToRoute",function(){
    it("should add a station to a busRoute",function(){
     bangaluru.addStationToRoute('SWASTIK','1');
     assert.deepEqual(bangaluru.stations.SWASTIK.connectedRoutes,['1']);
     assert.deepEqual(bangaluru.buses['1'],['SWASTIK']);
    });
  });
}); 
