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
        this.baseHealth = 10;
        this.healthGrowth = '1d12';
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
    return Druid;
}(base_1.BaseCharacter));
exports.Druid = Druid;
//# sourceMappingURL=Druid.js.map