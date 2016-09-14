// Created by trevor on 9/13/16.


angular.module('dnd').directive('tvoCharacterCreate', [
    function () {
        return {
            scope: true,
            controllerAs: 'vm',
            controller: 'dndCharacterCreate',
            templateUrl: 'components/character/create/template.html'
        };
    }
]);