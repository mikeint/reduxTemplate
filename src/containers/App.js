import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom';
import Header from '../components/Header/Header'
import HomeContainer from './HomeContainer'


const Routes = () => (
    <Switch>
        <Route exact path={"/"} component={HomeContainer} /> 
    </Switch>
);

function App() {
  return (
		<div className="App">
			<Header />  
			<div className="mainContainer"> 
				<Routes />
			</div>
		</div>
	);
}

export default withRouter(App);
