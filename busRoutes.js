var fs = require('fs');
var all_routes = fs.readFileSync("./All_Routes_By_Number.txt",'utf8');
var giveRoutes = function(all_routes){
  var routes = {};
  all_routes = all_routes.split('\r\n');
  all_routes.forEach(function(route){
    var route = route.split(':');
    routes[route[0]] = route[1].split(',') ;
  });
  return routes;
};

var Station = function(station){
  this.name = station;
  this.connectedRoutes = [];
};

Station.prototype = {
  addBusRoute : function(busRoute){
                  this.connectedRoutes.push(busRoute);
                }
};
var City =  function(){
  this.stations = {};
  this.buses = {};
  this.hubs = [];
};
var count = 0;
City.prototype = {
  addStation : function(station){
                 count++;
      this.stations[station] = this.stations[station] || new Station(station);
  },
  addBusRoute : function(route){
    this.buses[route] = [];
  },
  addStationToRoute : function(station,route){
                        this.stations[station].addBusRoute(route);
                        this.buses[route].push(station);
                      },
  addHubs : function(){
              var all_Stations = this.stations;
             this.hubs = Object.keys(all_Stations).filter(function(station){ return all_Stations[station].connectedRoutes.length >= 10 });
           }

};

var giveCityBusRoutes = function(routes){
  var city = new City();
  Object.keys(routes).forEach(function(route){
    city.addBusRoute(route);
    routes[route].forEach(function(station){
      city.addStation(station);
      city.addStationToRoute(station,route);
    });
  });
  city.addHubs();
  return city;
};

var bangalore = giveCityBusRoutes(giveRoutes(all_routes));
module.exports = bangalore;
