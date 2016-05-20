
import {c, o, ctrl, Controller, Repeat, ArrayObservable} from 'carbyne'
import {Button} from 'carbyne-material'
import {InfiniteScroll} from './repeat'

import {MainState} from './app'

export class RepeaterState extends MainState {

	private ᐅarray: ArrayObservable<string>

	__init__() {
		this.ᐅarray = new ArrayObservable(['haha', 'hihi', 'hoho'])
	}

	toolbar() { return <h3>Repeater</h3> }

	content() {
		return <div>
			<h4>Repeat</h4>
			<div>
				<Button click={ev => this.ᐅarray.push('pouet') }>Add</Button>
				<Button click={ev => this.ᐅarray.pop() }>Remove</Button>
				<Button click={ev => {
					this.ᐅarray.setp(4, 'hahahah')
				} }>Test</Button>
			</div>
			{Repeat(this.ᐅarray, (ᐅct, idx) => <p>{ᐅct}</p>) }
			<h4>Infinite Scroll</h4>
			<InfiniteScroll render={e => <p>{e}</p>} provider={() => Math.random() }/>
			<h4>Virtual Scroll</h4>
		</div>
	}

}
