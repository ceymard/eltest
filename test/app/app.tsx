
import {o, c, Fragment} from 'carbyne';

export function MainState() {

  this.ᐅpass = o('hunter2');
  this.ᐅobj = o({a: 1, b: 2});
  this.ᐅval = o(200);
  this.ᐅbool = o(true);
  this.ᐅradio = o('one');
  this.ᐅsearch = o('search...');
  this.ᐅnumber = o(4);
  this.ᐅdate = o('2015-10-21');
  this.ᐅmonth = o('2015-10');
  this.ᐅweek = o('2015-W24');
  this.ᐅtime = o('12:23');
  this.ᐅdatetime_local = o('2015-10-06T12:23');
  this.ᐅtel = o('+33652738543');
  this.ᐅemail = o('admin@domain.com');
  this.ᐅcolor = o('#f45947');
  this.ᐅarray = o(['a', 'b', 'c']);
  this.ᐅtxt = o('some text');

  this.content = () => <p>There should be some content here and you should not be seeing this.</p>
  this.toolbar = () => <Fragment>
      <h3>Main State</h3>
    </Fragment>;
}
