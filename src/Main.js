import React from 'react';
import { connect } from 'react-redux';
import Timer from './Timer';
import { Start, Stop, Reset } from './actions';

class Main extends React.Component {
  render(){
    return (
    	<div>
        	<Timer />
        	<hr />
        </div>
    )
  }
}

export default connect(state => ({
  count: state.count
}), {  }
)(Main);