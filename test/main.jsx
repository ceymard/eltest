window.assert = function (b) {
  if (!b) console.error(new Error('assert failed'));
}

import {elt, Component} from 'elt/component';

class MyApp extends Component {
  initial_data = {
    txt: 'some text.',
    obj: {a: 1, b: 2}
  };

  props = ['txt'];

  view(data) {
    return <div>
      <span class='pouet'>test ! {data.txt} {false} {new Date()}</span><br/>
      <span>{data.obj} <input type='text' name='toto' value={data.txt}/></span>
    </div>;
  }
}

document.body.appendChild(<MyApp txt='pouet !'/>.$node);
// should append that node to the body.

// Hello!
