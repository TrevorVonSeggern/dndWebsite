// Created by trevor on 9/13/16.

export class BaseCharacter {
	className = '';

	baseHealth = 0;
	health = 0;
	healthGrowth = '';

	statPriorityOne = '';
	statPriorityTwo = '';

	baseCantripAllowance = 0;
	baseCantrips = [];
	baseCantripLocation = '';

	baseSpellAllowance = 0;
	baseSpells = [];
	baseSpellLocation = '';

	savingThrows = [];
	baseAvailableSkills = [];
	baseSkillAllowance = 0;

	armor = 'none';
	weapons = 'none';
	tools = 'none';
	baseConstitution = 0;
	constitution = 0;
	constitutionModifier = 0;

	calculateModifiers() {
		this.health = this.baseHealth;
	}
}
