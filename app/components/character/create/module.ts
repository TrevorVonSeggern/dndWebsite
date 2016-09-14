// Created by trevor on 9/13/16.
import * as angular from 'angular'
import {Inject, Controller} from "./controller";
import {Directive} from "./directive";

export var CreateCharacterModule = angular.module('dnd', [])
	.controller('dndCharacterCreate', ['$scope', Controller])
	.directive('tvoCharacterCreate', Directive);
