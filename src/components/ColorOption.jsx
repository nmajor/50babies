import React, { PropTypes, Component } from 'react';

class ColorOption extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
    this.styles = this.styles.bind(this);
  }
  handleClick() {
    this.props.handleClick(this.props.index);
  }
  styles() {
    return {
      backgroundColor: this.props.color,
    }
  }
  render() {
    return (<div
      style={this.styles()}
      className={`color-option ${this.props.selected ? 'selected' : ''}`}
      onClick={this.handleClick}
    ></div>);
  }
}

ColorOption.propTypes = {
  color: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
};


export default ColorOption;
