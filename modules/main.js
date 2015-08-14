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
            var buildTargets = creep.room.find(FIND_CONSTRUCTION_SITES);
            if(buildTargets.length) {
                creep.moveTo(buildTargets[0]);
                creep.build(buildTargets[0]);
            }else {
                repairer(creep);
            }
        }
    }

    if(creep.memory.role == 'guard') {
        var attackTargets = creep.room.find(FIND_HOSTILE_CREEPS);
        if(attackTargets.length) {
            creep.moveTo(attackTargets[0]);
            creep.attack(attackTargets[0]);
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