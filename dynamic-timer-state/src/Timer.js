import React from "react";
import './App.css';
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      active: false
    };
  }
  pauseTime = () => {
    clearInterval(this.countdown);
    this.setState({ active: false });
  };
  resetTime = () => {
    clearInterval(this.countdown);
    this.setState({
      time: 0 ,
      isActive: false
    });
  };

  Starttimer = () => {
    this.setState({ active: true });
    this.countdown = setInterval(() => {
      this.setState({
        time: this.state.time + 1000
      });
    }, 1000);
  };

  render() {
    return (
      <div>
        <div className="main-container">
          <div className="container">
            <div className="Numbers">
              <p className="number" > {Math.floor((this.state.time / 1000) /60 /60).toString().padStart(2,'0')}</p>
              <p className="text">Hour</p>
            </div>
            <p className="number">:</p>
            <div className="Numbers">
              <p className="number"> {(Math.floor((this.state.time / 1000) /60) %60).toString().padStart(2,'0')}</p>
              <p className="text">Minute</p>
            </div>
            <p className="number">:</p>
            <div className="Numbers">
              <p className="number thaweni">
                {Math.floor((this.state.time / 1000) % 60)
                  .toString()
                  .padStart(2, "0")}
              </p>
              <p className="text">Second</p>
              <button className='buttons' onClick={this.state.active ? this.pauseTime : this.Starttimer}>
                Start
              </button>
              <button className='buttons' onClick={this.resetTime}>Reset</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Timer;
