
import {Fragment as F, c} from 'carbyne';
import {Button as Bu, Radio as Ra, Input as In, Checkbox as Ch, dialog} from 'carbyne-material';

export function MaterialState() {

  const views = this.views;
  const data = this.data;

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

  views.toolbar = () => <F>
    <h3>Material</h3>
  </F>;

  views.content = () => <F>
    <h2>Form example</h2>
    <Bu click={(ev) => data.txt.set('clicked...')}>Click me !</Bu>
    <Bu class='primary' raised click={() => test_modal()}>Modal Dialog</Bu>
    <Bu disabled raised click={() => data.txt.set('disabled')}>Disabled</Bu>

    <Bu raised click={() => data.txt.set('javascript is fun.')} icon='language-javascript'></Bu>
    <Bu click={() => data.txt.set('favorite')} icon='favorite'></Bu>

    <br/>
    <Ch model={data.bool} title='Click me'/>
    <Ch disabled model={data.bool} title='Click me'/>
    <br/>
    <Ra value='string' model={data.radio} title='Test 1'/>
    <Ra value={() => <a href='https://www.google.com' target='_blank'>google.com</a>} model={data.radio} title='Test Link'/>
    <Ra value={{a: 1, b: 2}} model={data.radio} title='Test Object'/>
    <Ra value={() => <F><a href='https://www.reddit.com' target='_blank'>reddit.com</a> is nice</F>} model={data.radio} title='Test Array'/>
    <br/>
    {data.radio}
    <br/>
    <In model={data.txt}/>
    <In model={data.txt.transform({get : v => v.toUpperCase(), set: v => v.toLowerCase()})}/>

  </F>;

}
