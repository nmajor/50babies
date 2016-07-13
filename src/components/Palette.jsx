import React, { PropTypes, Component } from 'react';
import _ from 'lodash';
import ColorOption from './ColorOption';

class Pallette extends Component {
  renderOptions() {
    return this.props.options.map((option, index) => {
      return (<ColorOption
        key={index}
        color={option.color}
        index={index}
        handleClick={this.props.selectOption}
        selected={this.props.selectedOption === index}
      />);
    });
  }
  render() {
    return (<div>
      {this.renderOptions()}
    </div>);
  }
}

Pallette.propTypes = {
  options: PropTypes.array.isRequired,
  selectedOption: PropTypes.number.isRequired,
  selectOption: PropTypes.func.isRequired,
};

export default Pallette;
