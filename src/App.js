import React, { Component } from 'react';
import Clock from './Clock.js';
import StartStopButtons from './StartStopButtons.js';
import styled from 'styled-components';

const Title = styled.h1`
  width: 412px;
  margin: 0 auto;
  font-size: 3.5em;
  color: #1abc9c;
  padding-left: 7px;
`;

const sessionlength = 25*60;

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      time: sessionlength,
      progress: undefined
    }
    this.message = 'Click Start to begin session';
    this.handleStart = this.handleStart.bind(this);
    this.handleStop = this.handleStop.bind(this);
  }
  handleStart() {
    let that = this;
    if (!this.listener) {
      this.listener = setInterval(() => {
        that.setState(prevState => ({
          time: prevState.time - 1,
          progress: 100 - (prevState.time / sessionlength * 100)
        }));
      }, 1000);
    }
  }
  handleStop() {
    if (this.listener) {
      clearInterval(this.listener);
      this.setState({
        time: sessionlength,
        progress: undefined
      });
      this.listener = undefined;
    }
  }

  componentWillUpdate() {
    var date = new Date(null);
    date.setSeconds(this.state.time);
    var hhss = date.toISOString().substr(14, 5);
    this.timer = hhss;

    if (this.state.time === 0) {
      this.setState({
        time: sessionlength,
        progress: undefined
      });
      this.message = 'Click Start to begin another session';
    }
  }

  componentDidUpdate() {
    if (this.state.progress === 100) {
      this.handleStop();
    }
  }
  render() {
    return <div>
      <Title>Pomodoro Clock</Title>
      <Clock
        progress={this.state.progress}
      >
        {this.state.progress !== undefined ? this.timer : this.message}
      </Clock>
      <StartStopButtons onStart={this.handleStart} onStop={this.handleStop} />
    </div>
  }
}