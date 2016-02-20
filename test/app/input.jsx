
import {o, c, bind, click, Fragment} from 'carbyne';
import {View} from 'carbyne-router';

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


export function InputState() {

  this.toolbar = () => <Fragment>
      <h3>Input Page</h3>
      <View name='toolbar_subtitle'/>
    </Fragment>;

}


export function Html5InputState() {

  this.toolbar_subtitle = () => <Fragment>&nbsp;&ndash; HTML5 Inputs</Fragment>;

  this.content = () => <Fragment>
      <p>The new input types.</p>
      <It type='search' obs={this.search}></It>
      <It type='email' obs={this.email}></It>
      <It type='number' obs={this.number}></It>
      <It type='tel' obs={this.tel}></It>
      <It type='color' obs={this.color}></It>
      <It type='range' obs={this.val}></It>
      <It type='date' obs={this.date}></It>
      <It type='month' obs={this.month}></It>
      <It type='week' obs={this.week}></It>
      <It type='time' obs={this.time}></It>
      <It type='datetime-local' obs={this.datetime_local}></It>
    </Fragment>;
}


export function StandardInputState() {

  this.content = () => <Fragment>
      <p>The regular input types</p>
      <It type='text' obs={this.txt}></It>
      <It type='password' obs={this.pass}></It>
      <It type='checkbox' obs={this.bool}></It>
      <It type='radio' obs={this.radio}>
        <label><input type='radio' value='one' $$={bind(this.radio)}/>One</label>
        <label><input type='radio' value='two' $$={bind(this.radio)}/>Two</label>
      </It>
    </Fragment>
}
