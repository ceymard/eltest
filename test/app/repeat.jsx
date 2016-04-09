
import {Atom, ctrl, Controller, o, c, identity} from 'carbyne'


export class Repeater extends Atom {

	constructor(obs, fn) {
		super(null) // Virtual Atom
		this._current_length = 0
		this._obs = obs
		this._fn = fn

		this._next_value = null
	}

	mount() {
		super.mount(...arguments) // mount it normally

		// and then create the observing logic
		this.observe(this._obs, arr => {
			this._next_value = arr
			this._update()
		})
	}

	/**
	 * The only transformation that takes place is that children are
	 * added or removed if the new array's length is different from
	 * what we are tracking.
	 */
	_update() {
		let arr = this._next_value
		let fn = this._fn

		if (!Array.isArray(arr))
			return this.empty()

		if (arr.length < this._current_length) {
			// remove the elements we don't need anymore

			this.children
				.slice(arr.length)
				.map(atom => atom.destroy())

		} else if (arr.length > this._current_length) {
			for (var i = this._current_length; i < arr.length; i++) {
				this.append(fn(this._obs.prop(`${i}`), i))
			}
		}

		this._current_length = arr.length
	}

}


/**
 * An Atom that implements virtual scrolling that only creates
 * elements while we scroll instead of rendering them all.
 */
export class VirtualRepeat extends Atom {

}


/**
 * 1. Fill up enough elements to go beyond the scrolltop point plus a reasonable margin.
 */
export class InfiniteScrollController extends Controller {

	constructor(provider) {
		super(...arguments)
		this.o_list = o([])
		this.provider = provider
	}

	onMount() {
		// this.observe(this.o_base, arr => this.o_list.set(arr))

		this.atom.listen('scroll', ev => this.fillUp(ev))

		requestAnimationFrame(e => this.fillUp())
	}

	fillUp() {
		let e = this.atom.element

		if (e.scrollHeight - (e.clientHeight + e.scrollTop) < 1) {
			let new_elt = this.provider()
			if (new_elt === undefined || new_elt === null) return
			this.o_list.push(Math.random())
		}
	}

}


export class Appender extends Controller {

	constructor(provider) {
		super()
		this.provider = provider
		this.o_appended = o(0)
	}

	onMount() {
		this.atom.listen('scroll', ev => this.appendMore(ev))

		// when mounted, we have to wait just a bit to be certain
		// this element's dimensions are set.
		requestAnimationFrame(e => this.appendMore())
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
			this.o_appended.inc(1)
			this.atom.append(next)
		}
	}

}


export function Repeat(obs, fn) {
	if (typeof fn !== 'function') {
		return new Repeater(obs.obs, obs.render)
	}
	return new Repeater(obs, fn)
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

