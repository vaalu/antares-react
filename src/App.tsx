import React, { Component } from 'react'
import { Home } from './components/Home'

type State = {}
export class App extends Component<{}, State> {
	constructor(props:any) {
		super(props)
	}
	render = () => {
		return <Context.Provider value={ this.state }>{ <Home /> }</Context.Provider>
	} 
}
export const Context = React.createContext({})