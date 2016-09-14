// Created by trevor on 9/13/16.
import * as angular from 'angular'
import 'angular-dnd'
import {Inject, Controller} from "./controller";
import {Directive} from "./directive";

// dndLists module is a reference drag and drop lists.
export var CreateCharacterModule = angular.module('dnd', [
	'dndLists'
])
	.controller('dndCharacterCreate', ['$scope', Controller])
	.directive('tvoCharacterCreate', Directive);
