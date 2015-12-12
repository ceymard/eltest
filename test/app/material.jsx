
import {Fragment, c} from 'carbyne';
import {Button, Radio, Input, Checkbox, dialog} from 'carbyne-material';

export function MaterialState(views, params, data) {

  let test_modal = () => {
    dialog.modal({
      title: 'Big Warning !',
      text: 'This action is going to do tons of stuff you wouldnt really want to happen.\n Really proceed ?',
      agree: 'Yes',
      disagree: 'No',
      disableScrolling: true
    }).then((res) => {
      console.log(res);
    });
  };

  views.toolbar = () => <Fragment>
    <h3>Material</h3>
    </Fragment>;

  views.content = () => <Fragment>
    <h2>Form example</h2>
    <Button click={(ev) => data.txt.set('clicked...')}>Click me !</Button>
    <Button class='primary' raised click={() => test_modal()}>Modal Dialog</Button>
    <Button disabled raised click={() => data.txt.set('disabled')}>Disabled</Button>

    <Button raised click={() => data.txt.set('javascript is fun.')} icon='language-javascript'></Button>
    <Button click={() => data.txt.set('favorite')} icon='favorite'></Button>

    <br/>
    <Checkbox model={data.bool} title='Click me'/>
    <Checkbox disabled model={data.bool} title='Click me'/>
    <br/>
    <Radio value='string' model={data.radio} title='Test 1'/>
    <Radio value={() => <a href='https://www.google.com' target='_blank'>google.com</a>} model={data.radio} title='Test Link'/>
    <Radio value={{a: 1, b: 2}} model={data.radio} title='Test Object'/>
    <Radio value={() => <Fragment><a href='https://www.reddit.com' target='_blank'>reddit.com</a> is nice</Fragment>} model={data.radio} title='Test Array'/>
    <br/>
    {data.radio}
    <br/>
    <Input model={data.txt}/>
    <Input model={data.txt.transform((v) => v.toUpperCase(), (v) => v.toLowerCase())}/>

  </Fragment>;

}
