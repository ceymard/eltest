
import {o, c, Fragment} from 'carbyne';

export function MainState() {

  const data = this.data;

  data.pass = o('hunter2');
  data.obj = o({a: 1, b: 2});
  data.val = o(200);
  data.bool = o(true);
  data.radio = o('one');
  data.search = o('search...');
  data.number = o(4);
  data.date = o('2015-10-21');
  data.month = o('2015-10');
  data.week = o('2015-W24');
  data.time = o('12:23');
  data.datetime_local = o('2015-10-06T12:23');
  data.tel = o('+33652738543');
  data.email = o('admin@domain.com');
  data.color = o('#f45947');
  data.array = o(['a', 'b', 'c']);
  data.txt = o('some text');

  this.views.content = () => <p>There should be some content here and you should not be seeing this.</p>
  this.views.toolbar = () => <Fragment>
      <h3>Main State</h3>
    </Fragment>;

}
