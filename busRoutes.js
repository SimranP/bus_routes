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
City.prototype = {
  addStation : function(station){
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
             this.hubs = Object.keys(all_Stations).filter(function(station){ return all_Stations[station].connectedRoutes.length >= 50 });
           }

};
module.exports = City;
