// Created by trevor on 9/13/16.

import {Barbarian} from "../../../character/Barbarian";
import {Bard} from "../../../character/Bard";
import {BaseCharacter} from "../../../character/base";
var angular;
angular.module('dnd').controller('dndCharacterCreate', [
	'$scope',
	function (scope) {
		var vm = this;

		var list = [];
		list['Barbarian'] = new Barbarian();
		list['Bard'] = new Bard();


		vm.character = list['Barbarian'];

		vm.calculateClass = function () {
			if (vm.class == vm.character.className) {
				return;
			}
			else if (vm.character[vm.class] === undefined) {
				vm.character = new BaseCharacter();
			}
			else {
				vm.character = vm.characterList[vm.class];
			}
			// sum up totals
			vm.health = vm.baseHealth + vm.constitutionModifier;

			return;
			// if (vm.class == 'Bard') {
			// 	vm.baseHealth = 8;
			// 	vm.healthGrowth = '1d8';
			// 	vm.armor = 'light armor';
			// 	vm.weapons = 'Simple, hand crossbows, short/long swords and rapiers';
			// 	vm.tools = 'Three musical instruments of your choice';
			// 	vm.statPriorityOne = 'Charisma';
			// 	vm.statPriorityTwo = 'Dexterity';
			// 	vm.baseCantrips = 2;
			// 	vm.baseCantripLocation = 'Bard spell list';
			// 	vm.savingThrows = ['Dexterity', 'Charisma'];
			// 	vm.baseSkillAllowence = 2;
			// 	vm.baseAvailableSkills = [
			// 		''
			// 	];
			// }
			// else if (vm.class == 'Bard') {
			// 	vm.baseHealth = 8;
			// 	vm.healthGrowth = '1d8';
			// 	vm.armor = 'light armor';
			// 	vm.weapons = 'Simple, hand crossbows, short/long swords and rapiers';
			// 	vm.tools = 'Three musical instruments of your choice';
			// 	vm.statPriorityOne = 'Charisma';
			// 	vm.statPriorityTwo = 'Dexterity';
			// 	vm.baseCantrips = 0;
			// 	vm.savingThrows = ['Strength', 'Constitution'];
			// }

		};

		scope.$watch('vm.class', function (ov, nv) {
			vm.calculateClass();
		});
	}
]);