// Created by trevor on 9/13/16.

import * as angular from 'angular'

import {CreateCharacterModule} from "./components/character/create/module";

// Declare app level module which depends on views, and components
angular.module('myApp', [
	CreateCharacterModule.name
]);