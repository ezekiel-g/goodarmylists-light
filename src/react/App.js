import React from 'react'
import { createBrowserHistory } from 'history'
import { Router, Route, Switch } from 'react-router-dom'
import GamesContainer from './GamesContainer'
import KowOuterContainer from './kow/containers/KowOuterContainer'

let history = createBrowserHistory()

const App = props => {
	return (
		<Router history={history}>
			<Switch>
				<Route path='/' exact component={GamesContainer} />
				<Route path='/kow' exact component={KowOuterContainer} />				
			</Switch>
		</Router>
	)
}

export default App