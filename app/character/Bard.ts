// Created by trevor on 9/13/16.

import {BaseCharacter} from "./base";

export class Bard extends BaseCharacter {
	className = 'Bard';

	constructor() {
		super();

		this.baseHealth = 8;
		this.healthRecovery = '1d8';
		this.armor = 'light armor';
		this.weapons = 'Simple, hand crossbows, short/long swords and rapiers';
		this.tools = 'Three musical instruments of your choice';
		this.statPriorityOne = 'Charisma';
		this.statPriorityTwo = 'Dexterity';
		this.savingThrows = ['Dexterity', 'Charisma'];
		this.baseSkillAllowance = 2;
		this.baseAvailableSkills = [
			'Acrobatics',
			'Animal Handling',
			'Arcana',
			'Athletics',
			'Deception',
			'History',
			'Insight',
			'Intimidation',
			'Investigation',
			'Medicine',
			'Nature',
			'Perception',
			'Performance',
			'Persuasion',
			'Religion',
			'Sleight of Hand',
			'Stealth',
			'Survival'
		];

		this.baseCantripAllowance = 2;
		this.baseCantripLocation = 'Bard spell list';

		this.baseSpellAllowance = 4;
		this.baseSpellLocation = 'Bard spell list'
	}
}