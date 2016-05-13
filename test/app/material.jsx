
import {Fragment as F, c, If, Then, Else, Match, Case} from 'carbyne';
import {Button as Bu, Radio as Ra, Input as In, Checkbox as Ch, dialog, toast} from 'carbyne-material';

export function MaterialState() {

  const test_modal = () => {
    dialog.modal({
      title: 'Big Warning !',
      text: 'This action is going to do tons of stuff you wouldnt really want to happen.\n Really proceed ?',
      agree: 'Yes',
      disagree: 'No',
      disableScrolling: true
    }).then(res => {
      console.log(res);
    });
  };

  this.toolbar = () => <F>
    <h3>Material</h3>
  </F>;

  this.content = () => <F>
    <h2>Form example</h2>
    <Bu click={(ev) => toast.toast('toastin\'')}>Click me !</Bu>
    <Bu class='primary' raised click={() => test_modal()}>Modal Dialog</Bu>
    <Bu disabled raised click={() => this.ᐅtxt.set('disabled')}>Disabled</Bu>

    <Bu raised click={() => this.ᐅtxt.set('javascript is fun.')} icon='language-javascript'></Bu>
    <Bu click={() => this.ᐅtxt.set('favorite')} icon='favorite'></Bu>

    <br/>
    <Ch model={this.ᐅbool} title='Click me'/>
    <Ch disabled model={this.ᐅbool} title='Click me'/>
    <br/>
    <Ra value='string' model={this.ᐅradio} title='Test 1'/>
    <Ra value={() => <a href='https://www.google.com' target='_blank'>google.com</a>} model={this.ᐅradio} title='Test Link'/>
    <Ra value={{a: 1, b: 2}} model={this.ᐅradio} title='Test Object'/>
    <Ra value={() => <F><a href='https://www.reddit.com' target='_blank'>reddit.com</a> is nice</F>} model={this.ᐅradio} title='Test Array'/>
    <br/>
    <In model={this.ᐅtxt}/>
    <In model={this.ᐅtxt.transform({get : v => v.toUpperCase(), set: v => v.toLowerCase()})}/>

    {If(this.ᐅradio.eq('string'),
      Then(v =>
        <p>You chose 'Test 1'</p>),
      Else(v =>
        <p>You chose something else</p>)
    )}

    {Match(this.ᐅradio,
      Case('string', v => <p>Test 1 is go</p>),
      Case('one', v => <p>One is go</p>)
    )}
  </F>;

}
