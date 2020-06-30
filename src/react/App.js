import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import GamesContainer from './GamesContainer'
import KowOuterContainer from './kow/containers/KowOuterContainer'

// The routing is done here in the full version
const App = props => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact component={GamesContainer} />
				<Route path='/kow' exact component={KowOuterContainer} />				
			</Switch>
		</BrowserRouter>
	)
}

export default App