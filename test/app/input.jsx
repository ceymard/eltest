
import {o, c, bind, click, Fragment, View} from 'carbyne';

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


export function InputState(views, params, data) {

  views.toolbar = <Fragment>
      <h3>Input Page</h3>
      <View name='toolbar.subtitle'/>
    </Fragment>;

}


export function Html5InputState(views, params, data) {

  views['toolbar.subtitle'] = <Fragment>&nbsp;&ndash; HTML5 Inputs</Fragment>;

  views.content = <Fragment>
      <p>The new input types.</p>
      <It type='search' obs={data.search}></It>
      <It type='email' obs={data.email}></It>
      <It type='number' obs={data.number}></It>
      <It type='tel' obs={data.tel}></It>
      <It type='color' obs={data.color}></It>
      <It type='range' obs={data.val}></It>
      <It type='date' obs={data.date}></It>
      <It type='month' obs={data.month}></It>
      <It type='week' obs={data.week}></It>
      <It type='time' obs={data.time}></It>
      <It type='datetime-local' obs={data.datetime_local}></It>
    </Fragment>;
}


export function StandardInputState(views, params, data) {

  views['toolbar.subtitle'] = <Fragment>&nbsp;&ndash; Regular Inputs</Fragment>;

  views.content = <Fragment>
      <p>The regular input types</p>
      <It type='text' obs={data.txt}></It>
      <It type='password' obs={data.pass}></It>
      <It type='checkbox' obs={data.bool}></It>
      <It type='radio' obs={data.radio}>
        <label><input type='radio' value='one' $$={bind(data.radio)}/>One</label>
        <label><input type='radio' value='two' $$={bind(data.radio)}/>Two</label>
      </It>
    </Fragment>

}
