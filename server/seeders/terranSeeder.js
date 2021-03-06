var Terran = require('../terran/terranSchema');

var mongoose = require('mongoose');

mongoose.connect('localhost:8000');

var terranUnits = [
  new Terran({
    name: 'SCV'
  }),
  new Terran({
    name: 'Marine'
  }),
  new Terran({
    name: 'Marauders'
  }),
  new Terran({
    name: 'Reaper'
  }),
  new Terran({
    name: 'Ghost'
  }),
  new Terran({
    name: 'Hellion'
  }),
  new Terran({
    name: 'Siege Tank'
  }),
  new Terran({
    name: 'Thor'
  }),
  new Terran({
    name: 'Viking'
  }),
  new Terran({
    name: 'Medivac'
  }),
  new Terran({
    name: 'Raven'
  }),
  new Terran({
    name: 'Banshee'
  }),
  new Terran({
    name: 'Battlecruiser'
  }),
  new Terran({
    name: 'Hellbat'
  }),
  new Terran({
    name: 'Widow Mine'
  }),
  new Terran({
    name: 'Liberator'
  }),
  new Terran({
    name: 'Cyclone'
  }),

]

var done = 0;

for (var i = 0; i < terranUnits.length; i++) {
  terranUnits[i].save(function(err, result) {
    done++;
    if (done === terranUnits.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
