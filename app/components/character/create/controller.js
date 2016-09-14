"use strict";
var Barbarian_1 = require("../../../character/Barbarian");
var Bard_1 = require("../../../character/Bard");
var base_1 = require("../../../character/base");
var Cleric_1 = require("../../../character/Cleric");
var Druid_1 = require("../../../character/Druid");
var Fighter_1 = require("../../../character/Fighter");
var Monk_1 = require("../../../character/Monk");
var Paladin_1 = require("../../../character/Paladin");
var Ranger_1 = require("../../../character/Ranger");
var Rogue_1 = require("../../../character/Rogue");
var Sorcerer_1 = require("../../../character/Sorcerer");
var Warlock_1 = require("../../../character/Warlock");
var Wizard_1 = require("../../../character/Wizard");
exports.Controller = function (scope) {
    var vm = this;
    vm.list = [];
    var list = vm.list;
    list['Barbarian'] = new Barbarian_1.Barbarian();
    list['Bard'] = new Bard_1.Bard();
    list['Cleric'] = new Cleric_1.Cleric();
    list['Druid'] = new Druid_1.Druid();
    list['Fighter'] = new Fighter_1.Fighter();
    list['Monk'] = new Monk_1.Monk();
    list['Paladin'] = new Paladin_1.Paladin();
    list['Ranger'] = new Ranger_1.Ranger();
    list['Rogue'] = new Rogue_1.Rogue();
    list['Sorcerer'] = new Sorcerer_1.Sorcerer();
    list['Warlock'] = new Warlock_1.Warlock();
    list['Wizard'] = new Wizard_1.Wizard();
    vm.characterClass = 'Barbarian';
    vm.character = list['Barbarian'];
    vm.calculateClass = function () {
        if (vm.list[vm.characterClass]) {
            vm.character = vm.list[vm.characterClass];
            vm.character.calculateModifiers();
        }
        else {
            vm.character = new base_1.BaseCharacter();
        }
    };
    scope.$watch('vm.characterClass', function (ov, nv) {
        vm.calculateClass();
    });
};
exports.Inject = ['$scope', exports.Controller];
//# sourceMappingURL=controller.js.map