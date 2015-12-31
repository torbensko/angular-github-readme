'use strict';

/**
 * Fetches a readme for a specified GitHub project and renders it in the current page.
 * 
 * @ngdoc directive
 * @name clientApp.directive:readme
 * @description
 * # readme
 */
angular.module('sko.github-readme', [])
  .directive('githubReadme', function() {
    return {
      restrict: 'E',
      scope: {
      	src: '@', // e.g. https://github.com/torbensko/github-readme
      },
      link: function postLink(scope, element, attrs) {
      	
      	var watcher = scope.$watch('src', function() {
          console.log(scope.src, attrs.headingReduce);
      		if ( !scope.src ) { return; }
	      	
	      	element.githubReadme({
            githubReadme: scope.src,
            headingReduce: attrs.headingReduce ? attrs.headingReduce : 0,
          });

          // stop watching
          watcher();
	      });
      }
    };
  });
