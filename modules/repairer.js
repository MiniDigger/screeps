/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('repair'); // -> 'a thing'
 */
module.exports = function (creep) {
    if(creep.energy === 0) {
        var spawn = creep.pos.findClosest(FIND_MY_SPAWNS);
        creep.moveTo(spawn);
        if( spawn.energy > 199) {
            spawn.transferEnergy(creep);
        }
    }
    else{

        var roadToRepair = creep.pos.findClosest(FIND_STRUCTURES, {
            filter: function(object){
                return object.structureType === STRUCTURE_ROAD && (object.hits < object.hitsMax);
            }
        });

        if (roadToRepair){
            creep.moveTo(roadToRepair);
            creep.repair(roadToRepair);

            // perhaps check the results again?

        } else {
            // nothing to repair, go to spawn
            creep.moveTo(creep.pos.findClosest(FIND_MY_SPAWNS));
        }
    }
}