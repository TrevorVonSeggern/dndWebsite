// Created by trevor on 9/13/16.

import {BaseCharacter} from "./base";

export class Cleric extends BaseCharacter {
	className = 'Cleric';

	constructor() {
		super();

		this.baseHealth = 8;
		this.healthRecovery = '1d8';
		this.armor = 'light armor, medium armor, and shields';
		this.weapons = 'all simple weapons';
		this.tools = 'none';
		this.statPriorityOne = 'Wisdom';
		this.statPriorityTwo = 'Strength/Constitution';
		this.baseCantripAllowance = 3;
		this.baseCantripLocation = 'Cleric Spell List';
		this.savingThrows = ['Wisdom', 'Charisma'];
		this.baseSkillAllowance = 2;
		this.baseAvailableSkills = [
			'History',
			'Insight',
			'Medicine',
			'Persuasion',
			'Religion'
		];
		this.subClasses = [
			'Knowledge',
			'Life',
			'Light',
			'Tempest',
			'Trickery',
			'War'
		];
	}
}
