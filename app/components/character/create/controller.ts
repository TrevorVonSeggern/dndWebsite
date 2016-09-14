// Created by trevor on 9/13/16.

import {Barbarian} from "../../../character/Barbarian";
import {Bard} from "../../../character/Bard";
import {BaseCharacter} from "../../../character/base";
import {Cleric} from "../../../character/Cleric";
import {Druid} from "../../../character/Druid";
import {Fighter} from "../../../character/Fighter";
import {Monk} from "../../../character/Monk";
import {Paladin} from "../../../character/Paladin";
import {Ranger} from "../../../character/Ranger";
import {Rogue} from "../../../character/Rogue";
import {Sorcerer} from "../../../character/Sorcerer";
import {Warlock} from "../../../character/Warlock";
import {Wizard} from "../../../character/Wizard";

import * as angular from 'angular';

export var Controller = function (scope) {
	var vm = this;

	vm.list = [];
	var list = vm.list;
	list['Barbarian'] = new Barbarian();
	list['Bard'] = new Bard();
	list['Cleric'] = new Cleric();
	list['Druid'] = new Druid();
	list['Fighter'] = new Fighter();
	list['Monk'] = new Monk();
	list['Paladin'] = new Paladin();
	list['Ranger'] = new Ranger();
	list['Rogue'] = new Rogue();
	list['Sorcerer'] = new Sorcerer();
	list['Warlock'] = new Warlock();
	list['Wizard'] = new Wizard();

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
	};


	vm.models = {
		selected: null,
		lists: {"A": []}
	};

	// Generate initial model
	vm.models.lists.A.push({label: "Strength"});
	vm.models.lists.A.push({label: "Constitution"});
	vm.models.lists.A.push({label: "Dexterity"});
	vm.models.lists.A.push({label: "Intelligence"});
	vm.models.lists.A.push({label: "Wisdom"});
	vm.models.lists.A.push({label: "Charisma"});


	scope.$watch('vm.characterClass', function (ov, nv) {
		vm.calculateClass();
	});
};
export var Inject = ['$scope', Controller];
