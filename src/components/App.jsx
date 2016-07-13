import React, { PropTypes, Component } from 'react';
import Palette from './Palette';
import Baby from './Baby';

const options = [
  { color: '#111', image: 'http://lorempixel.com/g/400/400/' },
  { color: '#222', image: 'http://lorempixel.com/g/300/300/' },
  { color: '#333', image: 'http://lorempixel.com/g/200/200/' },
  { color: '#444', image: 'http://lorempixel.com/g/600/600/' },
  { color: '#555', image: 'http://lorempixel.com/g/500/500/' },
  { color: '#666', image: 'http://lorempixel.com/g/100/100/' },
  { color: '#777', image: 'http://lorempixel.com/g/800/800/' },
  { color: '#888', image: 'http://lorempixel.com/g/700/700/' },
  { color: '#999', image: 'http://lorempixel.com/g/900/900/' },
  { color: '#aaa', image: 'http://lorempixel.com/g/400/400/' },
];

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      selectedOption: 0,
    };

    this.selectOption = this.selectOption.bind(this);
  }
  selectOption(color) {
    this.setState({ selectedOption: color });
  }

  render() {
    return (<div className="app container">
      <h1>50 Shades of Baby</h1>
      <div className="row">
        <div className="col-md-2">
          <Palette
            options={options}
            selectedOption={this.state.selectedOption}
            selectOption={this.selectOption}
          />
        </div>
        <div className="col-md-8">
          <Baby option={options[this.state.selectedOption]} />
        </div>
      </div>
    </div>);
  }
}

export default App;
