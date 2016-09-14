// Created by trevor on 9/13/16.

import {Barbarian} from "../../../character/Barbarian";
import {Bard} from "../../../character/Bard";
import {BaseCharacter} from "../../../character/base";

export var Controller = function (scope) {
	var vm = this;

	vm.list = [];
	var list = vm.list;
	list['Barbarian'] = new Barbarian();
	list['Bard'] = new Bard();

	vm.characterClass = 'Barbarian';
	vm.character = list['Barbarian'];

	vm.calculateClass = function () {
		if (vm.list[vm.characterClass]) {
			vm.character = vm.list[vm.characterClass];
			vm.character.calculateModifiers();
		}
		else {
			vm.character = new BaseCharacter();
		}
		// if (vm.characterClass == 'Bard') {
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
		// else if (vm.characterClass == 'Bard') {
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

	scope.$watch('vm.characterClass', function (ov, nv) {
		vm.calculateClass();
	});
};
export var Inject = ['$scope', Controller];
