
import {VirtualAtom, ctrl, Controller, o, c, identity, ArrayObservable, Observable} from 'carbyne'


export class Appender extends Controller {

	public provider: () => any
	public o_appended: Observable<number>

	constructor(provider) {
		super()
		this.provider = provider
		this.o_appended = o(0)
	}

	onMount() {
		this.atom.listen('scroll', ev => this.appendMore(ev))

		// when mounted, we have to wait just a bit to be certain
		// this element's dimensions are set.
		requestAnimationFrame(() => this.appendMore(null))
	}

	clear() {
		// remove everything !
		this.atom.empty()
		this.o_appended.set(0)
	}

	appendMore(ev) {
		var e = this.atom.element

		while (e.scrollHeight - (e.clientHeight + e.scrollTop) < 50) {
			var next = this.provider()
			if (next === null) break
			this.o_appended.add(1)
			this.atom.append(next)
		}
	}

}


/**
 * An Atom that only appends elements when the user reaches the
 * end of the "page" or whatever container it has.
 *
 * When the end is reached, the provider() is called to give the
 * next elements
 */
export function InfiniteScroll(a) {

	// let isc = new InfiniteScrollController(a.provider)
	let isc = new Appender(() => <p style='padding: 5px 10px'><b>John Smith</b><br/>15SCA - {Math.random()}</p>)

	let cont = <div $$={ctrl(isc)} style='margin: 1em; border: 1px solid rgba(0, 0, 0, 0.14); height: 300px; overflow-y: scroll; -webkit-overflow-scrolling: touch'>

	</div>
	// let cont = <div $$={ctrl(isc)} style='margin: 1em; border: 1px solid rgba(0, 0, 0, 0.14); height: 300px; overflow-y: scroll; -webkit-overflow-scrolling: touch'>
	// 	<Repeat obs={isc.o_list} render={a.render||identity}/>
	// </div>

	return cont
}

