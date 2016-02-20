
import {Fragment as F, c} from 'carbyne';
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
    <Bu disabled raised click={() => this.txt.set('disabled')}>Disabled</Bu>

    <Bu raised click={() => this.txt.set('javascript is fun.')} icon='language-javascript'></Bu>
    <Bu click={() => this.txt.set('favorite')} icon='favorite'></Bu>

    <br/>
    <Ch model={this.bool} title='Click me'/>
    <Ch disabled model={this.bool} title='Click me'/>
    <br/>
    <Ra value='string' model={this.radio} title='Test 1'/>
    <Ra value={() => <a href='https://www.google.com' target='_blank'>google.com</a>} model={this.radio} title='Test Link'/>
    <Ra value={{a: 1, b: 2}} model={this.radio} title='Test Object'/>
    <Ra value={() => <F><a href='https://www.reddit.com' target='_blank'>reddit.com</a> is nice</F>} model={this.radio} title='Test Array'/>
    <br/>
    {this.radio}
    <br/>
    <In model={this.txt}/>
    <In model={this.txt.transform({get : v => v.toUpperCase(), set: v => v.toLowerCase()})}/>

  </F>;

}
