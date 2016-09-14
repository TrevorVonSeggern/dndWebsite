"use strict";
var angular = require('angular');
var controller_1 = require("./controller");
var directive_1 = require("./directive");
exports.CreateCharacterModule = angular.module('dnd', [])
    .controller('dndCharacterCreate', ['$scope', controller_1.Controller])
    .directive('tvoCharacterCreate', directive_1.Directive);
//# sourceMappingURL=module.js.map