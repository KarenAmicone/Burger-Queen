import React, { useState, useEffect } from 'react'
import './App.css';
import LoginForm from '../login/login'
import Home from '../home/home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {CircularProgress } from '@material-ui/core'
import firebase from '../firebase'


export default function App() {
	const [firebaseInitialized, setFirebaseInitialized] = useState(false)

	useEffect(() => {
		firebase.isInitialized().then(val => {
			setFirebaseInitialized(val)
		})
	})

	return firebaseInitialized !== false ? (
			<Router>
				<Switch>
					<Route exact path="/" component={LoginForm} />
					<Route exact path="/home" component={Home} />
				</Switch>
			</Router>

	) : <div id="loader"><CircularProgress /></div>
}