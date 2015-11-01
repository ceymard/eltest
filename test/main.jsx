/**
 * 	TODO
 *
 * 	- class, style, tabindex and other 'common' properties should be forwarded from
 * 		Components to their html node.
 * 	- a nice router.
 * 	- Material
 * 		- switch
 * 		- dialog
 * 		- select !
 */

window.assert = function (b) {
  if (!b) console.error(new Error('assert failed'));
}

require("babel-core/browser-polyfill"); // ????

import {o} from 'elt/observable';
import {elt} from 'elt/node';
import {Controller} from 'elt/controller';
import {bind, ctrl} from 'elt/decorators';
import {click} from 'elt/touch';

import {dialog, Button, Checkbox, Icon, Radio, Toolbar, Input} from 'elt-material';


class MyAppCtrl extends Controller {

  constructor(attrs) {
    super();

    this.pass = o('hunter2');
    this.obj = o({a: 1, b: 2});
    this.val = o(200);
    this.bool = o(true);
    this.radio = o('one');
    this.search = o('search...');
    this.number = o(4);
    this.date = o('2015-10-21');
    this.month = o('2015-10');
    this.week = o('2015-W24');
    this.time = o('12:23');
    this.datetime_local = o('2015-10-06T12:23');
    this.tel = o('+33652738543');
    this.email = o('admin@domain.com');
    this.color = o('#f45947');
    this.array = o(['a', 'b', 'c']);
    this.txt = o(attrs.txt || 'some text');
  }

  test(event) {
    this.txt.set('was clicked');

    let arr = this.array.get();
    arr = arr.concat([String.fromCharCode(arr[0].charCodeAt(0) + arr.length)]);
    this.array.set(arr);
  }

  async testModal() {
    try {
      let res = await dialog.modal(
        'Big Warning !',
        'This action is going to do tons of stuff you wouldnt really want to happen.\n Really proceed ?',
        'Yes',
        'No');
      console.log(res);
    } catch (e) {
      console.error(e);
    }
  }

  async testDialog() {

  }

}


function It(attrs, children) {

  let data = {
    obs: attrs.obs || o(null),
    type: attrs.type || 'text'
  };

  if (!attrs.obs)
    attrs.obs = o(null);
  attrs.type = attrs.type || 'text';

  return <li>
      <span class='title'>{data.type || 'text'}</span> <code class='result'>{data.obs}</code>
      {children.length ? children : <input type={data.type} $$={bind(data.obs)}/>}
    </li>;
}


function MyApp(attrs, children) {
  let app = new MyAppCtrl(attrs);

  return <div $$={ctrl(app)}>
    <Toolbar>
      <Icon name='menu'/>
      <Icon name='check_box_outline_blank'/>
      <h3>Examples</h3>
    </Toolbar>
    <h2>Form example</h2>
    <Button click={(ev) => app.test()}>Click me !</Button>
    <Button class='primary' raised click={() => app.testModal()}>Modal Dialog</Button>
    <Button disabled raised click={() => app.test()}>Disabled</Button>
    <br/>
    <Checkbox model={app.bool} title='Click me'/>
    <Checkbox disabled model={app.bool} title='Click me'/>
    <br/>
    <Radio value='string' model={app.radio} title='Test 1'/>
    <Radio value={2} model={app.radio} title='Test 2'/>
    <Radio value={{a: 1, b: 2}} model={app.radio} title='Test Object'/>
    <br/>
    <Input model={app.txt}/>
    <Input model={app.txt.transform((v) => v.toUpperCase(), (v) => v.toLowerCase())}/>


    <h2>Array Test</h2>

    <h2>HTML5 Input Tests</h2>
    <ul>
      <It type='text' obs={app.txt}></It>
      <It type='password' obs={app.pass}></It>
      <It type='checkbox' obs={app.bool}></It>
      <It type='search' obs={app.search}></It>
      <It type='email' obs={app.email}></It>
      <It type='number' obs={app.number}></It>
      <It type='tel' obs={app.tel}></It>
      <It type='radio' obs={app.radio}>
        <label><input type='radio' value='one' $$={bind(app.radio)}/>One</label>
        <label><input type='radio' value='two' $$={bind(app.radio)}/>Two</label>
      </It>
      <It type='color' obs={app.color}></It>
      <It type='range' obs={app.val}></It>
      <It type='date' obs={app.date}></It>
      <It type='month' obs={app.month}></It>
      <It type='week' obs={app.week}></It>
      <It type='time' obs={app.time}></It>
      <It type='datetime-local' obs={app.datetime_local}></It>
    </ul>

    <h2>Some Random Listeners</h2>
    <span>{app.obj}</span><br/>
    <span>{app.txt} !!!!</span><br/>
    <span>{app.bool} !!!!</span><br/>
  </div>;
}

<MyApp txt='pouet !'/>.mount(document.body);
