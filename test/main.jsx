/**
 * First, we call elt() that setups all the components.
 * At this point, the component hierarchy has been established,
 * and right after that, middlewares and components can actually
 * start to talk to each other. However, the DOM has not been initialized at all.
 * This is when view() is called, to ready the component hierachy.
 * Also, this is when parent is set up.
 *
 * Then we want to mount the component somewhere. This is where the nodes
 * are created, and all the associations with the observables are done.
 * When link() is done executing (and mount()), the DOM is in place with all events
 * at the ready.
 */

window.assert = function (b) {
  if (!b) console.error(new Error('assert failed'));
}

import {o} from 'elt/observable';
import {elt} from 'elt/node';
import {Component, Repeat} from 'elt/controller';
import {bind, click} from 'elt/decorators';

import {Button} from 'elt/material/button';

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
        <a href='javascript://' $$={click(this.bye.bind(this))}>X</a>
      </li>
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
      txt: 'some text.',
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
      <Button class='raised' $$={click(this.test.bind(this))}>Click me !</Button><br/>
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

}

<MyApp txt='pouet !'/>.mount(document.body);
