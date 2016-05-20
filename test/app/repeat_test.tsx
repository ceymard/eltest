
import {c, o, ctrl, Controller, Repeat, ArrayObservable} from 'carbyne'
import {Button} from 'carbyne-material'
import {InfiniteScroll} from './repeat'


export function RepeaterState() {

	var ᐅarray = new ArrayObservable(['haha', 'hihi', 'hoho'])

	this.toolbar = () => <h3>Repeater</h3>

	this.content = () => <div>
		<h4>Repeat</h4>
		<div>
			<Button click={ev => ᐅarray.push('pouet')}>Add</Button>
			<Button click={ev => ᐅarray.pop()}>Remove</Button>
			<Button click={ev => {
				ᐅarray.setp(4, 'hahahah')
			}}>Test</Button>
		</div>
		{Repeat(ᐅarray, (ᐅct, idx) => <p>{ᐅct}</p>)}
		<h4>Infinite Scroll</h4>
		<InfiniteScroll render={e => <p>{e}</p>} provider={() => Math.random()}/>
		<h4>Virtual Scroll</h4>
	</div>

}
