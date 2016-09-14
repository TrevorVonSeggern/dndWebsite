// Created by trevor on 9/13/16.

export class BaseCharacter {
	className: string = '';
	subClassName: string = '';
	subClasses: string[] = [];

	baseHealth = 0;
	baseHealthLvlOneModifier: string = 'Constitution'; // standard for most characters
	health = 0;
	healthRecovery: string = '';

	statPriorityOne: string = '';
	statPriorityTwo: string = '';

	baseCantripAllowance = 0;
	baseCantrips = [];
	baseCantripLocation: string = '';

	baseSpellAllowance = 0;
	baseSpells = [];
	baseSpellLocation: string = '';

	savingThrows = [];
	baseAvailableSkills = [];
	baseSkillAllowance = 0;

	armor: string = 'none';
	weapons: string = 'none';
	tools: string = 'none';
	baseConstitution = 0;
	constitution = 0;
	constitutionModifier = 0;

	calculateModifiers() {
		this.health = this.baseHealth;
	}
}
