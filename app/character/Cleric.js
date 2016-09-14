"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_1 = require("./base");
var Cleric = (function (_super) {
    __extends(Cleric, _super);
    function Cleric() {
        _super.call(this);
        this.className = 'Cleric';
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
    return Cleric;
}(base_1.BaseCharacter));
exports.Cleric = Cleric;
//# sourceMappingURL=Cleric.js.map