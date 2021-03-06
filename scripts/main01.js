/*
user strict 명령은 엄격하게 javascript 룰을 적용하라는 의미
일부 브라우저의 경우 use strict 명령을 통해 보다 빠르게 동작하는 경우도 존재하는것같다.
잘못된 부분에 대한 검증도 보다 엄격하게 동작
하지만, 일부 라이브러리의 경우 use strict 명령을 사용하면 동작하지 않는 경우도 있으므로 주의
*/
'use strict';

requirejs.config({
	/*
	javascript 기본 경로 설정  
	data-main 속성이 사용되었다면, 그 경로가 baseUrl
	data-main 속성이 require.js를 위한 특별한 속성으로 require.js는 스크립트 로딩을 시작하기 위해 이부분을 체크
	*/
	baseUrl: 'scripts', 
	
	/*
	paths:
	js 확장자는 생략한다.
	path는 baseUrl 아래에서 직접적으로 찾을 수 없는 모듈명들을 위해 경로를 매핑해주는 속성
	"/"로 시작하거나 "http"등으로 시작하지 않으면, 기본적으로는 baseUrl에 상대적으로 설정 	
	paths:{
		"ex":"aa/bb"
	}
	의 형태로 설정한 뒤에, define에서 "ex/module" 로 불러오게 되면, 스크립트 태그에서는 실제로는 src="aa/bb/module.js" 로 잡을것이다.
	path는 또한 아래와 같이 특정 라이브러리 경로 선언을 위해 사용될수 있는데, path 매핑 코드는 자동적으로 .js 확장자를 붙여서 모듈명을 매핑
	*/
	paths:{
		'jquery':'./lib/jquery',
		'scroll':'./lib/jquery.scroll', 
		'angular':'./lib/angular.min'
	},
	
	/*
	 
	*/
	shim:{
		'scroll':{
			deps:['jquery'], // angular가 로드되기 전에 jquery가 로드 되어야 한다.
			exports:'scroll' //로드된 angular 라이브러리는 angular라는 이름의 객체로 사용할 수 있게 해준다.
		},
		'angular':{
			deps:['jquery'], 
			exports:'angular' 
		}
	}
});

define(['angular'],function(){  
	function jin($scope){
		$scope.aaa = 'test';
	}
}); 