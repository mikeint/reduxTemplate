import React from 'react';
import { connect } from 'react-redux'
import { incrementCounter } from '../actions/homeActions';
import HomePage from '../components/HomePage/HomePage';

const HomeContainer = props =>
    <HomePage {...props} />

const mapStateToProps = state => ({ 
	passedState: state
})

const mapDispatchToProps = dispatch => ({
    incrementCounter: (data) => dispatch(incrementCounter(data)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer);