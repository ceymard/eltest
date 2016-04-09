
import {c, o, ctrl, Controller} from 'carbyne'
import {Button} from 'carbyne-material'
import {Repeat as R, InfiniteScroll} from './repeat'


export function RepeaterState() {

	var o_array = o(['haha', 'hihi', 'hoho'])

	this.toolbar = () => <h3>Repeater</h3>

	this.content = () => <div>
		<h4>Repeat</h4>
		<div>
			<Button click={ev => o_array.push('pouet')}>Add</Button>
			<Button click={ev => o_array.pop()}>Remove</Button>
			<Button click={ev => {
				o_array.set(4, 'hahahah')
			}}>Test</Button>
		</div>
		{R(o_array, (o_ct, idx) => <p>{o_ct}</p>)}
		<h4>Infinite Scroll</h4>
		<InfiniteScroll render={e => <p>{e}</p>} provider={() => Math.random()}/>
		<h4>Virtual Scroll</h4>
	</div>

}
