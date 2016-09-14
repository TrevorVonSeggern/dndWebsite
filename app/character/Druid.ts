// Created by trevor on 9/13/16.

import {BaseCharacter} from "./base";

export class Druid extends BaseCharacter {
	className = 'Druid';

	constructor() {
		super();

		this.baseHealth = 8;
		this.healthRecovery = '1d8';
		this.armor = 'light armor, medium armor, and shields. Nothing metal.';
		this.weapons = 'Clubs, daggers, darts, javelins, maces';
		this.tools = 'Herbalism kit';
		this.statPriorityOne = 'Wisdom';
		this.statPriorityTwo = 'Constitution';
		this.baseCantripAllowance = 0;
		this.baseCantripLocation = '';
		this.savingThrows = ['Intelligence', 'Wisdom'];
		this.baseSkillAllowance = 2;
		this.baseAvailableSkills = [
			'Arcana',
			'Animal',
			'Handling',
			'Insight',
			'Medicine',
			'Nature',
			'Perception',
			'Religion',
			'Survival'
		];
	}
}
