
window.assert = function (b) {
  if (!b) console.error(new Error('assert failed'));
}

import {o} from 'elt/observable';
import {elt, Component} from 'elt/component';
import {Bind, Click} from 'elt/middleware';

class It extends Component {
  props = ['obs', 'type'];

  view(data) {
    if (!data.obs)
      data.obs = o(null);
    data.type = data.type || 'text';

    return <li>
        <span class='title'>{data.type || 'text'}</span>
        <code class='result'>{data.obs}</code>
        <input type={data.type} $$={Bind(data.obs)}/>
      </li>
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
  //
  //
  // Quid de get/set des objets pour les rendre observables à la Vue ?
  // Il y a quand même quelque chose d'assez agréable là dedans...

  // FIXME peut être changer son nom pour quelque chose de moins ambigu.
  //    en tout cas revoir sa fonction ; il n'est pas forcément souhaitable
  //    que data se convertisse en un objet complètement observable.
  //    (peut être faire des observables simples même lorsqu'on file des objets ?)
  //    (et vérifier à l'observation qu'on a un observable et que donc ça ne sert à
  //    rien d'observer l'observable....)
  //
  //    Bref, la façon de passer des datas à un component doit être revue impérativement.
  initial_data = {
    txt: 'some text.',
    pass: 'hunter2',
    obj: {a: 1, b: 2},
    // obs: o({a: 5, b: 6}),
    val: 200,
    bool: true,
    radio: 'one',
    search: '',
    number: 4,
    date: '2015-10-21',
    month: '2015-10',
    week: '2015-W24',
    time: '12:23',
    datetime: new Date, // not working.
    datetime_local: '2015-10-06T12:23',
    tel: '+33652738543',
    email: 'admin@domain.com',
    color: '#f45947'
  };

  props = ['txt'];

  // Il faudra probablement rajouter un ', content' en argument et lui donner la liste des children.
  // NOTE : il faudra donc revoir la mécanique d'appendChild et d'insertion des nodes dans le DOM.
  view(data) {
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
        <It type='datetime' obs={data.datetime}></It>
        <It type='datetime-local' obs={data.datetime_local}></It>
      </ul>

      <h2>Some Random Listeners</h2>
      <span class='pouet'>{false} {new Date()}</span> <button $$={Click(this.test.bind(this))}>Click me !</button><br/>
      <span>{data.obj}</span><br/>
      <span> {data.txt} !!!!</span><br/>
      <span> {data.bool} !!!!</span><br/>
    </div>;
  }
  // <span><input type='text' name='toto2' $$={Bind(data.obs.a)}/> {data.obs.a} !!!!</span><br/>

  test() {
    this.data.txt = 'was clicked';
  }

}

// FIXME il faut bien revoir le unmount pour que les nodes et attributs qui font des observations
//    les arrêtent. On risque d'avoir pas mal de memory leaks sinon.
<MyApp txt='pouet !'/>.mount(document.body);
