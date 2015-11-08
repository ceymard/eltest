import {Router, View} from 'carbyne';

export var router = new Router;

// How do I handle last visited view ?
router.setDefault('test-input');

router.state('app', {
  url: '/',
  view: MainState
});

router.state('app.input', {
  url: '/input',
  // No arguments, only one view, which is the main view.
  view: InputPage
});

router.state('app.input.shiny', {
  url: '/shiny',
  view: Html5InputTest
});

router.state('app.input.standard', {
  url: '/standard',
  view: StandardInputTest
});

router.state('app.material', {
  url: '/material',
  view: MaterialTest
});

// router.on('route-change-fail', function (event) {
//
// });

// Basic view of our application.
<div>
  <Toolbar>
    <View name='toolbar' router={router}/>
  </Toolbar>
  <Content>
    <View name='content' router={router}/>
  </Content>
</div>.mount(document.body);
