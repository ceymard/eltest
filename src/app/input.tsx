
import {o, c, bind, click, Fragment} from 'carbyne';
import {View} from 'carbyne-router';
import {MainState} from './app'

/**
 * Input Test shortcut
 */
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


export class InputState extends MainState {

  toolbar() {
    return <Fragment>
      <h3>Input Page</h3>
      <View name='toolbar_subtitle'/>
    </Fragment>
  }

}


export class Html5InputState extends InputState {

  toolbar_subtitle() { return <Fragment>&nbsp; &ndash; HTML5 Inputs</Fragment> }

  content() {
    return <Fragment>
      <p>The new input types.</p>
      <It type='search' obs={this.ᐅsearch}></It>
      <It type='email' obs={this.ᐅemail}></It>
      <It type='number' obs={this.ᐅnumber}></It>
      <It type='tel' obs={this.ᐅtel}></It>
      <It type='color' obs={this.ᐅcolor}></It>
      <It type='range' obs={this.ᐅval}></It>
      <It type='date' obs={this.ᐅdate}></It>
      <It type='month' obs={this.ᐅmonth}></It>
      <It type='week' obs={this.ᐅweek}></It>
      <It type='time' obs={this.ᐅtime}></It>
      <It type='datetime-local' obs={this.ᐅdatetime_local}></It>
    </Fragment>
  }
}


export class StandardInputState extends InputState {

  content() {
    return <Fragment>
      <p>The regular input types</p>
      <It type='text' obs={this.ᐅtxt}></It>
      <It type='password' obs={this.ᐅpass}></It>
      <It type='checkbox' obs={this.ᐅbool}></It>
      <It type='radio' obs={this.ᐅradio}>
        <label><input type='radio' value='one' $$={bind(this.ᐅradio) }/>One</label>
        <label><input type='radio' value='two' $$={bind(this.ᐅradio) }/>Two</label>
      </It>
    </Fragment>
  }
}

