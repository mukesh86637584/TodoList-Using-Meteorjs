// import angular from 'angular';
// import angularMeteor from 'angular-meteor';
 
// angular.module('simple-todos', [
  // angularMeteor
// ]);


import angular from 'angular';
import angularMeteor from 'angular-meteor';
import todosList from '../imports/components/todosList/todosList';
 
angular.module('simple-todos', [
  angularMeteor,
  todosList.name
]);
