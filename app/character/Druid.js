"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_1 = require("./base");
var Druid = (function (_super) {
    __extends(Druid, _super);
    function Druid() {
        _super.call(this);
        this.className = 'Druid';
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
    return Druid;
}(base_1.BaseCharacter));
exports.Druid = Druid;
//# sourceMappingURL=Druid.js.map