
import {o, c, Fragment, Observable} from 'carbyne'
import {State} from 'carbyne-router'

export class MainState extends State {

  public ᐅpass: Observable<string>
  public ᐅobj: Observable<Object>
  public ᐅval: Observable<number>
  public ᐅbool: Observable<boolean>
  public ᐅradio: Observable<string>
  public ᐅsearch: Observable<string>
  public ᐅnumber: Observable<number>
  public ᐅdate: Observable<string>
  public ᐅmonth: Observable<string>
  public ᐅweek: Observable<string>
  public ᐅtime: Observable<string>
  public ᐅdatetime_local: Observable<string>
  public ᐅtel: Observable<string>
  public ᐅemail: Observable<string>
  public ᐅcolor: Observable<string>
  public ᐅtxt: Observable<string>


  __init__() {
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
    this.ᐅtxt = o('some text');
  }

  content() {
    return <p>There should be some content here and you should not be seeing this.</p>
  }

  toolbar() {
    return <Fragment>
      <h3>Main State</h3>
    </Fragment>
  }

}
