var fs = require('fs');
var City = require('./busRoutes');
var all_routes = fs.readFileSync('./All_Routes_By_Number.txt','utf8');
var giveRoutes = function(all_routes){
  var routes = {};
  all_routes = all_routes.split('\r\n');
  all_routes.forEach(function(route){
    var route = route.split(':');
    routes[route[0]] = route[1].split(',') ;
  });
  return routes;
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
var finder = {};
finder.directRouteBetween = function(from,to){
  var routes = [];
  Object.keys(bangalore.buses).forEach(function(bus){
    if(bangalore.buses[bus].indexOf(from) != -1 && bangalore.buses[bus].indexOf(to) != -1){
      routes.push(bus);
    };
  });
    return routes;
};

module.exports = finder;


