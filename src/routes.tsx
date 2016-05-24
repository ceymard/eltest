
// import 'babel-polyfill'
import * as fs from 'fastclick';
document.addEventListener('DOMContentLoaded', ev => fs.attach(document.body));

import {c} from 'carbyne'
import {Router, View} from 'carbyne-router'

import {dialog, Button, Checkbox, Icon, Radio, Toolbar, Input, Content} from 'carbyne-material'
import {Nav, NavBody as Body, NavDivider as Divider, NavItem as I} from 'carbyne-material'

import {MainState} from './app/app'
import {InputState, Html5InputState, StandardInputState} from './app/input'
import {MaterialState} from './app/material'
import {RepeaterState} from './app/repeat_test'

var router = new Router

router.state('app', '', MainState)
router.state('app.input', '/input', InputState)
router.state('app.input.shiny', '/shiny', Html5InputState)
router.state('app.input.standard', '/standard', StandardInputState)
router.state('app.material', '/material', MaterialState)
router.state('app.repeater', '/repeater', RepeaterState)
router.default('app.input.standard');

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
export function dialog_menu() {

  var nav = <Nav router={router}>
    <div class='menu-header'>
      <div class='menu-line'>
        <img src='/logo.png' width='64' height='64'/>
        <div class='menu-grow'/>
        <Button icon='power' click={function(e, atom) {
          atom.emit('nav-go', 'app.login')
        } }/>
      </div>
      <div class='menu-names'>
        <div class='name'>Jambon the man</div>
        <div>Secteur 405</div>
      </div>
    </div>
    <Body>
      <I icon='format-list-bulleted' state='app.input.standard'>
        Inputs Standard
      </I>
      <I icon='pin' state='app.input.shiny'>
        Inputs HTML5
      </I>
      <I icon='border-all' state='app.material'>
        Material
      </I>
      <I icon='border-all' state='app.repeater'>
        Repeaters
      </I>
      <Divider/>
      <div class='menu-afterword'>Salesway-Engagement® Version 0.0.1</div>
    </Body>
  </Nav>

  nav.mount(document.body)
}

// Basic view of our application.

var div = <div>
  <Toolbar>
    <Button icon='menu' click={ev => dialog_menu()}/>
    <View name='toolbar' router={router}/>
  </Toolbar>
  <Content>
    <View name='content' router={router}/>
  </Content>
</div>

div.mount(document.body)

router.linkWithLocation()
// router.go('app.input.standard');
