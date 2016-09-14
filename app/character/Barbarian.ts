// Created by trevor on 9/13/16.

import {BaseCharacter} from "./base";

export class Barbarian extends BaseCharacter {
	className = 'Barbarian';

	constructor() {
		super();

		this.baseHealth = 10;
		this.healthRecovery = '1d12';
		this.armor = 'light armor, heavy armor, and shields';
		this.weapons = 'Simple and martial';
		this.tools = 'none';
		this.statPriorityOne = 'Strength';
		this.statPriorityTwo = 'Constitution';
		this.baseCantripAllowance = 0;
		this.baseCantripLocation = '';
		this.savingThrows = ['Strength', 'Constitution'];
		this.baseSkillAllowance = 2;
		this.baseAvailableSkills = [
			'Animal Handling',
			'Athletics',
			'Intimidation',
			'Nature',
			'Perception',
			'Survival'
		];
		this.subClasses = [
			'Path of the Berserker',
			'Path of the Totem Warrior'
		];
	}
}
