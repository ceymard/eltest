import * as fs from 'fastclick';
document.addEventListener('DOMContentLoaded', ev => fs.attach(document.body));

import {c} from 'carbyne';
import {Router, View} from 'carbyne-router';

import {dialog, Button, Checkbox, Icon, Radio, Toolbar, Input, Content} from 'carbyne-material';

import {MainState} from './app/app';
import {InputState, Html5InputState, StandardInputState} from './app/input';
import {MaterialState} from './app/material';


export var router = new Router;

router.state('app', '', MainState);
router.state('app.input', '/input', InputState);
router.state('app.input.shiny', '/shiny', Html5InputState);
router.state('app.input.standard', '/standard', StandardInputState);
router.state('app.material', '/material', MaterialState);

/*
  We will do that once we have the slide menu

function Link(attrs, children) {
  // missing is_active.
  return <a $$={router.href(attrs.state, attrs.args || {})}>{children}</a>;
}

<SlideMenu>
  <h3>Input</h3>
  <Link state='app.input.standard'>Standard</Link>
  <Link state='app.input.shiny'>HTML5</Link>
  <h3>Material</h3>
  <Link state='app.material.forms'>Forms</Link>
</SlideMenu>

*/

// Basic view of our application.
<div>
  <Toolbar>
    <Button icon='menu' click={() => alert('clicked')}/>
    <View name='toolbar' router={router}/>
  </Toolbar>
  <Content>
    <a $$={router.href('app.input.standard')}>Standard</a>
    <a $$={router.href('app.input.shiny')}>Html5</a>
    <a $$={router.href('app.material')}>Material</a>
    <View name='content' router={router}/>
  </Content>
</div>.mount(document.body);

router.linkWithLocation();
// router.default('app.input.standard');
// router.go('app.input.standard');
