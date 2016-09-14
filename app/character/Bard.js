"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_1 = require("./base");
var Bard = (function (_super) {
    __extends(Bard, _super);
    function Bard() {
        _super.call(this);
        this.className = 'Bard';
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
        this.baseSpellLocation = 'Bard spell list';
    }
    return Bard;
}(base_1.BaseCharacter));
exports.Bard = Bard;
//# sourceMappingURL=Bard.js.map