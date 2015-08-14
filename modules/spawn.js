module.exports = function (creep) {
    Game.spawns.Spawn1.createCreep([WORK, CARRY, MOVE],"Worker1",{role: 'harvester'});
}