
import React from 'react';
import Outputmain from './components/Outputmain.js';
import Buttons from './components/Buttons.js';
import Title from './components/Title';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      question: '',
      answer: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const value = event.target.value;
    switch (value) {
      case '=': {
        if (this.state.question !== '') {
          var ans = '';
          try {
            ans = eval(this.state.question);
          }
          catch (err) {
            this.setState({ answer: "Math Error" });
          }
          if (ans === undefined)
            this.setState({ answer: "Math Error" });
          else
            this.setState({ answer: ans, question: '' });
          break;
        }
      }
      case 'Clear': {
        this.setState({ question: '', answer: '' });
        break;
      }
      default: {
        this.setState({ question: this.state.question += value })
        console.log(this.state.question)
        break;
      }
    }
  }

  render() {
    return (
      <div className="frame">
        <Title value="Calculator app !!" />
        <div className="mainCalc">
          <Outputmain question={this.state.question} answer={this.state.answer} />
          <div className="Buttons-row">
            <Buttons label={'Clear'} handleClick={this.handleClick} />
          </div>
          <div className="Buttons-row">
            <Buttons label={'7'} handleClick={this.handleClick} />
            <Buttons label={'8'} handleClick={this.handleClick} />
            <Buttons label={'9'} handleClick={this.handleClick} />
            <Buttons label={'*'} handleClick={this.handleClick} />
          </div>
          <div className="Buttons-row">
            <Buttons label={'4'} handleClick={this.handleClick} />
            <Buttons label={'5'} handleClick={this.handleClick} />
            <Buttons label={'6'} handleClick={this.handleClick} />
            <Buttons label={'-'} handleClick={this.handleClick} />
          </div>
          <div className="Buttons-row">
            <Buttons label={'1'} handleClick={this.handleClick} />
            <Buttons label={'2'} handleClick={this.handleClick} />
            <Buttons label={'3'} handleClick={this.handleClick} />
            <Buttons label={'+'} handleClick={this.handleClick} />
          </div>
          <div className="Buttons-row">
            <Buttons label={'0'} handleClick={this.handleClick} />
            <Buttons label={'='} handleClick={this.handleClick} />
            <Buttons label={'.'} handleClick={this.handleClick} />
            <Buttons label={'/'} handleClick={this.handleClick} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;