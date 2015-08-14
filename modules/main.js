// Your code goes here...
var harvester = require('harvester');
var repairer = require('repairer');

for(var name in Game.creeps) {
    var creep = Game.creeps[name];

    if(creep.memory.role == 'harvester') {
        harvester(creep);
    }

    if(creep.memory.role == 'builder') {

        if(creep.carry.energy == 0) {
            creep.moveTo(Game.spawns.Spawn1);
            Game.spawns.Spawn1.transferEnergy(creep);
        }
        else {
            var buildtargets = creep.room.find(FIND_CONSTRUCTION_SITES);
            if(buidtargets.length) {
                creep.moveTo(buildtargets[0]);
                creep.build(buildtargets[0]);
            }else {
                repairer(creep);
            }
        }
    }

    if(creep.memory.role == 'guard') {
        var attacktargets = creep.room.find(FIND_HOSTILE_CREEPS);
        if(attacktargets.length) {
            creep.moveTo(attacktargets[0]);
            creep.attack(attacktargets[0]);
        }
    }

    if(creep.memory.role =='energy') {
        if(creep.carry.energy == 0) {
            creep.moveTo(Game.spawns.Spawn1);
            Game.spawns.Spawn1.transferEnergy(creep);
        }
        else {
            var target = creep.room.controller;
            creep.moveTo(target);
            creep.upgradeController(target);
        }
    }
}