
import {o, c, Fragment} from 'carbyne';

export function MainState() {

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
  this.txt = o('some text');

  this.content = () => <p>There should be some content here and you should not be seeing this.</p>
  this.toolbar = () => <Fragment>
      <h3>Main State</h3>
    </Fragment>;
}
