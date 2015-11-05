import {Router, View} from 'carbyne';

export var router = new Router;

// How do I handle last visited view ?
router.setDefault('test-input');

router.state('main', {
  url: '/',
  view: MainState
});

router.state('input', {
  url: '/input',
  parent: 'main',
  // No arguments, only one view, which is the main view.
  view: InputPage
});

router.state('input.shiny', {
  url: '/shiny',
  parent: 'main',
  view: Html5InputTest
});

router.state('input.standard', {
  url: '/standard',
  parent: 'main',
  view: StandardInputTest
});

router.state('material', {
  url: '/material',
  parent: 'main'
  view: MaterialTest
});

// router.on('route-change-fail', function (event) {
//
// });

// Basic view of our application.
<MyApp/>.mount(document.body);
