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
        console.log('hey');
      	
      	var watcher = scope.$watch('src', function() {
          console.log('watch', scope.src);
      		if ( !scope.src ) { return; }
	      	
	      	element.githubReadme({
    				src: scope.src,
    				headingAdjust: attrs.headingAdjust ? attrs.headingAdjust : 1,
  				});

          // stop watching
          watcher();
	      });
      }
    };
  });
