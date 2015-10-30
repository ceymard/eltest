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
import {Component, Repeat} from 'elt/controller';
import {bind} from 'elt/decorators';
import {click} from 'elt/touch';

import {dialog, Button, Checkbox, Icon, Radio, Toolbar, Input} from 'elt-material';

class It extends Component {

  view(attrs, children) {
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
      // <a href='javascript://' $$={click(this.bye.bind(this))}>X</a>
  }

  bye() {
    this.node.unmount();
  }
}

class MyApp extends Component {

  // Il faudra probablement rajouter un ', children' en argument et lui donner la liste des children.
  // NOTE : il faudra donc revoir la mécanique d'appendChild et d'insertion des nodes dans le DOM.
  view(attrs, children) {

    let data = this.data = o.all({
      pass: 'hunter2',
      obj: {a: 1, b: 2},
      val: 200,
      bool: true,
      radio: 'one',
      search: 'search...',
      number: 4,
      date: '2015-10-21',
      month: '2015-10',
      week: '2015-W24',
      time: '12:23',
      datetime_local: '2015-10-06T12:23',
      tel: '+33652738543',
      email: 'admin@domain.com',
      color: '#f45947',
      array: ['a', 'b', 'c'],
      txt: attrs.txt || 'some text'
    });

    return <div>
      <Toolbar>
        <Icon name='menu'/>
        <Icon name='check_box_outline_blank'/>
        <h3>Examples</h3>
      </Toolbar>
      <h2>Form example</h2>
      <Button click={this.test.bind(this)}>Click me !</Button>
      <Button class='primary' raised click={this.testModal.bind(this)}>Modal Dialog</Button>
      <Button disabled raised click={this.test.bind(this)}>Disabled</Button>
      <br/>
      <Checkbox model={data.bool} title='Click me'/>
      <Checkbox disabled model={data.bool} title='Click me'/>
      <br/>
      <Radio value='string' model={data.radio} title='Test 1'/>
      <Radio value={2} model={data.radio} title='Test 2'/>
      <Radio value={{a: 1, b: 2}} model={data.radio} title='Test Object'/>
      <br/>
      <Input model={data.txt}/>
      <Input model={data.txt.transform((v) => v.toUpperCase(), (v) => v.toLowerCase())}/>


      <h2>Array Test</h2>
      <Repeat data={data.array} view={(data) => <span>{data.$index} : {data.$value}{!data.$last ? ', ' : ''}</span>}/>

      <h2>HTML5 Input Tests</h2>
      <ul>
        <It type='text' obs={data.txt}></It>
        <It type='password' obs={data.pass}></It>
        <It type='checkbox' obs={data.bool}></It>
        <It type='search' obs={data.search}></It>
        <It type='email' obs={data.email}></It>
        <It type='number' obs={data.number}></It>
        <It type='tel' obs={data.tel}></It>
        <It type='radio' obs={data.radio}>
          <label><input type='radio' value='one' $$={bind(data.radio)}/>One</label>
          <label><input type='radio' value='two' $$={bind(data.radio)}/>Two</label>
        </It>
        <It type='color' obs={data.color}></It>
        <It type='range' obs={data.val}></It>
        <It type='date' obs={data.date}></It>
        <It type='month' obs={data.month}></It>
        <It type='week' obs={data.week}></It>
        <It type='time' obs={data.time}></It>
        <It type='datetime-local' obs={data.datetime_local}></It>
      </ul>

      <h2>Some Random Listeners</h2>
      <span>{data.obj}</span><br/>
      <span>{data.txt} !!!!</span><br/>
      <span>{data.bool} !!!!</span><br/>


    </div>;
  }

  test(event) {
    this.data.txt.set('was clicked');

    let arr = this.data.array.get();
    arr = arr.concat([String.fromCharCode(arr[0].charCodeAt(0) + arr.length)]);
    this.data.array.set(arr);
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
    class BetterDialog extends Dialog {
      view(attrs, children) {

      }
    }

    let res = await dialog.show(
      (dlg) =>
      <Dialog>
        <h3>My Super Title</h3>
        <p>I want to do stuff, I do</p>
        <p>But it's hard...</p>
        <Dialog.Buttons stacked>
          <Button click={dlg.close}>No</Button>
          <Button click={dlg.resolve(40)}>Yes</Button>
        </Dialog.Buttons>
      </Dialog>);
  }

}

<MyApp txt='pouet !'/>.mount(document.body);
