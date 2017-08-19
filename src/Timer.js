import React from 'react';
import { connect } from 'react-redux';
import { Start, Stop, Reset, Tick } from './actions';


class Timer extends React.Component {
	 constructor() {
        super();
        let interval;
    }

    // componentDidMount() {
    //     this.interval = setInterval(() => this.props.Tick(), 0);
    // }

    // componentWillUnmount() {
    //     clearInterval(this.interval);
    // }

format(time) {
    const pad = (time, length) => {
      while (time.length < length) {
        time = '0' + time;
      }
      return time;
    }
    
    time = new Date(time);
    let m = pad(time.getMinutes().toString(), 2);
    let s = pad(time.getSeconds().toString(), 2);
    let ms = pad(time.getMilliseconds().toString(), 3);
    
    return `${m} : ${s} . ${ms}`;
  }

  render(){
				
    return (
    	<div>
        	<h1>Time: {this.format(this.props.time)}</h1>
        	<hr/>
        	<button type="button" onClick={this.props.Start}>
              Start
        	</button>
        	<button type="button" onClick={this.props.Stop}>
              Stop
        	</button>
        	<button type="button" onClick={this.props.Reset}>
              Reset
        	</button>
        </div>
    )
  }
}

export default connect(state => ({isOn: state.isOn,
	time: state.time}), {
  Start, Stop, Reset, Tick
})(Timer);