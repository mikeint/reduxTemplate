import React, { Component } from 'react'
import './HomePage.scss'  

class HomePage extends Component {

    constructor(props) {
        super(props); 
        this.state = { 
        };
    }

    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        const { passedState } = this.props;
        return ( 
            <div className="homeContainer"> 
                <div className="button" onClick={() => this.props.incrementCounter(passedState.homeState.value)}>{passedState.homeState.value}</div>
            </div> 
        );
    }
}

export default HomePage;