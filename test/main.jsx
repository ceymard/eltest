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
import {elt, Component, Repeat} from 'elt/component';
import {Bind, Click} from 'elt/middleware';

class It extends Component {
  props = ['obs', 'type'];

  view(data, content) {
    if (!data.obs)
      data.obs = o(null);
    data.type = data.type || 'text';

    return <li>
        <span class='title'>{data.type || 'text'}</span> <code class='result'>{data.obs}</code>
        {content.length ? content : <input type={data.type} $$={Bind(data.obs)}/>}
        <a href='javascript://' $$={Click(this.bye.bind(this))}>X</a>
      </li>
  }

  bye() {
    console.log('????');
    this.unmount();
  }
}

class MyApp extends Component {

  // NOTE Array peut recevoir
  //    - un iterable, auquel cas la génération ne se fait qu'une fois sans observation.
  //      un .map serait mieux si on peut rajouter des arrays dans les children comme des boeufs.
  //    - un observable avec juste une valeur iterable, au quel cas
  //      on tente de faire du tracking à la track-by.
  //    - un array-observable fait pour overrider les push(), length et compagnie, et qui dissuade
  //      d'utiliser l'accesseur [].

  data_defaults = {
    txt: 'some text.',
    pass: 'hunter2',
    obj: {a: 1, b: 2},
    // obs: o({a: 5, b: 6}),
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
    array: ['a', 'b', 'c']
  };

  props = ['txt'];

  // Il faudra probablement rajouter un ', content' en argument et lui donner la liste des children.
  // NOTE : il faudra donc revoir la mécanique d'appendChild et d'insertion des nodes dans le DOM.
  view(data, content) {

    return <div>
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
          <label><input type='radio' value='one' $$={Bind(data.radio)}/>One</label>
          <label><input type='radio' value='two' $$={Bind(data.radio)}/>Two</label>
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
      <span class='pouet'>{false} {new Date()}</span> <button $$={Click(this.test.bind(this))}>Click me !</button><br/>
      <span>{data.obj}</span><br/>
      <span>{data.txt} !!!!</span><br/>
      <span>{data.bool} !!!!</span><br/>

      <h2>Array Test</h2>
      <Repeat data={data.array} view={(data) => <span>{data.$index} : {data.$value}{!data.$last ? ', ' : ''}</span>}/>

    </div>;
  }

  test(event) {
    this.data.txt = 'was clicked';

    let arr = this.data.array.get();
    arr = arr.concat([String.fromCharCode(arr[0].charCodeAt(0) + arr.length)]);
    this.data.array = arr;
  }

}

<MyApp txt='pouet !'/>.mount(document.body);
