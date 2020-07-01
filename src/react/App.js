import React from 'react'
import { Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import GamesContainer from './GamesContainer'
import KowOuterContainer from './kow/containers/KowOuterContainer'

let history = createBrowserHistory()

const App = props => {
	return (
		<Router history={history}>
			<Route path='/' exact component={GamesContainer} />
			<Route path='/kow' exact component={KowOuterContainer} />				
		</Router>
	)
}

export default App