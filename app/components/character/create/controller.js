"use strict";
var Barbarian_1 = require("../../../character/Barbarian");
var Bard_1 = require("../../../character/Bard");
var base_1 = require("../../../character/base");
exports.Controller = function (scope) {
    var vm = this;
    vm.list = [];
    var list = vm.list;
    list['Barbarian'] = new Barbarian_1.Barbarian();
    list['Bard'] = new Bard_1.Bard();
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