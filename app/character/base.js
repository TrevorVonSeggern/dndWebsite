// Created by trevor on 9/13/16.
"use strict";
var BaseCharacter = (function () {
    function BaseCharacter() {
        this.className = '';
        this.baseHealth = 0;
        this.health = 0;
        this.healthGrowth = '';
        this.statPriorityOne = '';
        this.statPriorityTwo = '';
        this.baseCantripAllowance = 0;
        this.baseCantrips = [];
        this.baseCantripLocation = '';
        this.baseSpellAllowance = 0;
        this.baseSpells = [];
        this.baseSpellLocation = '';
        this.savingThrows = [];
        this.baseAvailableSkills = [];
        this.baseSkillAllowance = 0;
        this.armor = 'none';
        this.weapons = 'none';
        this.tools = 'none';
        this.baseConstitution = 0;
        this.constitution = 0;
        this.constitutionModifier = 0;
    }
    return BaseCharacter;
}());
exports.BaseCharacter = BaseCharacter;
//# sourceMappingURL=base.js.map