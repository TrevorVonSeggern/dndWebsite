"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_1 = require("./base");
var Warlock = (function (_super) {
    __extends(Warlock, _super);
    function Warlock() {
        _super.call(this);
        this.className = 'Warlock';
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
    }
    return Warlock;
}(base_1.BaseCharacter));
exports.Warlock = Warlock;
//# sourceMappingURL=Warlock.js.map