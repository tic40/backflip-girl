"use strict";

var app = angular.module('backflipGirl', [
  'ngRoute',
  'ngSanitize'
]);

/*
 * router
 */
app.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider
		.when('/', {
			templateUrl: 'views/top.html',
			controller: 'TopController'
		})
		.when('/comic/:page', {
			templateUrl: 'views/comic.html',
			controller: 'ComicController'
		})
		.when('/comic/ex/:page', {
			templateUrl: 'views/comicEx.html',
			controller: 'ComicExController'
		})
		.when('/gallery/:page', {
			templateUrl: 'views/gallery.html',
			controller: 'GalleryController'
		})
		.otherwise({
			redirectTo: '/'
		});
	}
]);

/*
 * commonConstants
 */
app.constant('commonConstants', {
	TITLE: 'BACKFLIP GIRL',
	VERSION: '0.0.2',
	BASE_URL: '/backflip-girl',
    SUB_TITLES: [
		'またあたしだよ。',
		'誰かのために生きる事など、できるのだろうか？',
		'きっと、それは詭弁。',
		'今どう動いているか、それを考える事に逃げたいだけ。',
		'自分を離れて周りを見るなんて愚行。',
		'そう言って、爆宙少女は高く飛び立った。',
		'爆宙少女はおそらくであるが、無機質な少女が様々な人間との交流を通して、人間本来の性質に目覚めていくといった話である。',
		'また彼女が人間かどうかは分からない。これからもその点の設定を明言しないつもりである。',
		'その日少女は飛行機を待っていた。いや、そのように思えた。',
		'曇りとも晴天とも言えない、灰色がかった空を眺めて。',
		'私は語りかけた。',
		'また君かい？',
		'少女は即答する。',
		'またあたしだよ',
		'都会の喧騒は嫌いでは無い。より大勢に紛れた方が、１人になれる。',
		'大都市の真ん中にいて、自分が薄らいでいくのが分かる過程は、何とも切なく、同時に楽でもある。',
		'大衆の１人、砂浜の一粒。そう思えば責任は無いかのように感じられる。やはり楽なのだ。',
		'そんな話、前にもこの子としただろうか。',
		'黙れよ',
		'少女は言う。',
		'しばし集中したいとの事。',
		'不可解に思ったが、私は口をつぐんだ。',
		'少女は突然立ち上がると、おもむろに両手を振り上げ構えた。',
		'そして、バック宙を。',
		'着地はやや危なかった。それでも、以前より上手くなっている。',
		'私が誉めると少女は喜び、空港を去った。',
		'空港でバック宙をする少女は、砂浜の一粒では無い気がした。',
		'ところで、彼女に以前会ったのは、何時何処だったか…',
		'思い出せないまま、東京行きの飛行機を迎えるのだった。',
		'これは私があるお侍さんから聞いた不思議な話です。',
		'その方、何とも変わった人でねぇ。毎日剣術の稽古を終えては、海岸に出て、海の向こうを見てたそうで。',
		'ある日の事、ふと気付けば隣には幼い女の子が。',
		'こん海の向こうには何がある？',
		'お侍さんが聞くと、女の子はこう言ったそうで。',
		'海の向こうにあるものだよ',
		'お侍さん、それからいく先々で偶然その子に会ったそうで。',
		'気が合ったとか言ってましたね。日本の夜明けを見せると約束したとかも。',
		'最後に会った時にその子は、とんぼ返りをして見せてくれたそうですよ。',
		'坂本さん、無事に京都着きましたかねぇ。'
	],
	TOP_TABS: [
		'INTRO',
		'COMIC',
		'GALLERY',
		'OTHER'
	],
	ILLUST_NUM : 40
});

/*
 * backflipComicConstants
 */
app.constant('backflipComicConstants', {
	'intro' : 'introduction',
	'main' : [
		{
			'title' : 'モラエス',
			'pages' : 13,
			'discription' : ''
		},
		{
			'title' : '戦争編',
			'pages' : 7,
			'discription' : '<p>平和が、平和が。やがて平和が平和になる。</p><p>今日より明日。違う平和に。</p>'
		},
		{
			'title' : '人間失格編',
			'pages' : 7,
			'discription' : '<p>爆宙少女は、懸命にバック宙習得に励んでるんだ。毎日、毎日ね。<p>'
		},
		{
			'title' : '浪人生編',
			'pages' : 2,
			'discription' : '<p>シュールとは、便利な言葉なり。</p>'
		},
		{
			'title' : '同性愛編',
			'pages' : 5,
			'discription' : '<p>かつて姉妹のように、仲むつまじい二人がいた。</p><p>一人は、宇宙忍者と呼ばれ、争いの絶えない惑星へ。</p><p>もう一人は、好奇心から複雑な心理構造を持つ地球へ。</p><p>それぞれ調査をするため分かれた。</p><p>二人の性格、容姿は正反対のようだった。</p><p>だが一つ、同じ所があった。二人とも互いが好きだった。</p>'
		},
		{
			'title' : '爆天少女編-再会の章-',
			'pages' : 8,
			'discription' : ''
		},
		{
			'title' : '爆天少女編-離別の章-',
			'pages' : 11,
			'discription' : ''
		},
		{
			'title' : '人の上に立つもの編',
			'pages' : 3,
			'discription' : '<p>教育する爆宙知の陶冶、技術の陶冶、道徳の陶冶。</p><p>頭、手、心。これら３つの力を均衡させ初めて、人間は自律する。</p><p>他の動物とは、物事の認識や、社会を生き抜く怜悧、道徳において全く異なる生物、人間として。</p><p>人間として大人になる。一体何人がそんな大人になって死んでいくのだろう。人間陶冶。</p>'
		},
		{
			'title' : '手紙編',
			'pages' : 10,
			'discription' : '<p>人は生きているのか？</p><p>それとも生かされているのか？</p><p>そして、それを知るべきか？</p>'
		},
		{
			'title' : '師弟編',
			'pages' : 9,
			'discription' : '<p>DQNは即死</p>'
		},
		{
			'title' : '人の上に立つもの編 その2',
			'pages' : 3,
			'discription' : '<p>正しい考えを持っている人間が一人残らず黙っていたならば、人類改善への進展は永遠にみることが出来ない。</p><p>人間には公に意見を述べなければならない時がある。</p><p>我が敬愛するシラーの言葉だ。</p><p>なるほど。現代社会に不満がある、人間関係は難しい、など嘆く事はもしかしたら下らないのかもしれない。そもそもね。</p><p>そこにある真理から目を背け、いや根本を無視して、表面上の感情の中でうろうろしても元凶からは逸脱出来るはずも無い。</p><p>回避術と言えばしばし消極的な聞こえだが、それも兼ねたより良く生き抜く原理は、人との繋がりの中で自ら見出していくものだろう。</p><p>そうして、取り敢えず生きる人間から脱却できる。</p><p>そして俺は思う。自分だけのやり方で、例えばこの漫画でアプローチすべきだと。</p>'
		},
		{
			'title' : 'ハトベル王国編1章',
			'pages' : 8,
			'discription' : ''
		},
		{
			'title' : 'ハトベル王国編2章',
			'pages' : 11,
			'discription' : ''
		},
		{
			'title' : 'ハトベル王国編3章',
			'pages' : 6,
			'discription' : ''
		},
		{
			'title' : '大切な明日編',
			'pages' : 8,
			'discription' : '<p>自分の中にある規範を見つける事と、それに殉ずる事は、また別の事。</p><p>人間、そんな簡単に物事を判断出来る世界にはいないのだから。</p><p>自分の規範を成す規範からまず考えるべきかもやたら持論を叫ぶ人よ、気をつけて。</p>'
		},
		{
			'title' : '大泥棒に花束を編',
			'pages' : 3,
			'discription' : ''
		},
		{
			'title' : '爆宙少女 新シーズン開始',
			'pages' : 2,
			'discription' : '<p>身も蓋も無い話だが、爆宙少女は後付の話である。後付に後付を重ねた物語である。</p><p>ある意味で彼女に過去は無いのだが、それでいて彼女の、そう、ミルの過去は無限なのである。</p><p>とは言え、作品が続くたびにミルのアイデンティティは確立され続け、その過去は制約されていってしまう。現在に至る合理性がその分必要となるからだ。</p><p>人間一人の生涯も、意外とそんなもんである。</p><p>今の自分をかたどるのは他人。そして他人は過去の自分までも読み取ろうとする。相手に関して納得できる相手の物語を作りたいのだ。</p><p>いつも他人が他人を構成する。勝手に。</p><p>それでも私は、ミルも知らないミルを構成していこうと思う。それが、彼女のアイデンティティの可能性を狭める作業だとしても。</p><p>ということで、『爆宙少女』、新シーズン始動。今回は、もっとしょうもない!!</p>'
		}
	],
	'sp' : [
		{
			'title' : 'コラボ企画とある夏の夜編',
			'pages' : 7,
			'discription' : '<p>行橋が生んだクリエーター、DMKの脚本で作る『爆宙少女』。</p>'
		},
		{
			'title' : '番外編オカノ',
			'pages' : 3,
			'discription' : ''
		}
	]
});

/*
 * curTabService
 */
app.factory('curTabService', function (commonConstants) {
	var curTab = commonConstants.TOP_TABS[0];

	return {
		curTab: {
			get: function() {
				return curTab;
			},
			set: function(t) {
				curTab = t;
			}
		}
	};

});

/*
 * filter
 */
app.filter('range', function() {
  return function(input, total) {
    total = parseInt(total);

    for (var i=0; i<total; i++) {
      input.push(i);
    }

    return input;
  };
});

/*
 * TopController
 */
app.controller('TopController', function($scope, commonConstants, backflipComicConstants, curTabService) {

	$scope.init = function() {
		$scope.title = commonConstants.TITLE;
		$scope.version = commonConstants.VERSION;
		$scope.topTabs = commonConstants.TOP_TABS;
		$scope.webComicIntro = backflipComicConstants.intro;
		$scope.webComicMain = backflipComicConstants.main;
		$scope.webComicSp = backflipComicConstants.sp;
		$scope.currentTab = curTabService.curTab.get();
		$scope.illustNum = commonConstants.ILLUST_NUM;
		$scope.baseUrl = commonConstants.BASE_URL;
	}

	// get subtitle random
	$scope.subTitle = commonConstants.SUB_TITLES[Math.floor(Math.random() * commonConstants.SUB_TITLES.length)];

	$scope.topTab = function(param) {
		$scope.currentTab = param;
		curTabService.curTab.set(param);
	};

	// init
	$scope.init();
});

/*
 * ComicController
 */
app.controller('ComicController', function($scope, $routeParams, commonConstants, backflipComicConstants){

	$scope.init = function () {
		$scope.page = ($routeParams.page) ? Number($routeParams.page) : 1;
		$scope.webComicMain = backflipComicConstants.main;
		$scope.prevFlg = $scope.page > 1 ? true : false;
		$scope.nextFlg = $scope.page < 16 ? true : false;
		$scope.baseUrl = commonConstants.BASE_URL;
	};

	$scope.init();
});

/*
 * ComicExController
 */
app.controller('ComicExController', function($scope, $routeParams, commonConstants, backflipComicConstants){
	$scope.init = function () {
		$scope.page = ($routeParams.page) ? Number($routeParams.page) : 1;
		$scope.webComicMain = backflipComicConstants.sp;
		$scope.prevFlg = $scope.page > 1 ? true : false;
		$scope.nextFlg = $scope.page < 2 ? true : false;
		$scope.baseUrl = commonConstants.BASE_URL;
	};

	$scope.init();
});

/*
 * GalleryController
 */
app.controller('GalleryController', function($scope, $routeParams, commonConstants, backflipComicConstants){
	$scope.init = function () {
		$scope.page = ($routeParams.page) ? Number($routeParams.page) : 1;
		$scope.baseUrl = commonConstants.BASE_URL;
	};

	$scope.init();
});
