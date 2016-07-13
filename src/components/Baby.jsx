import React, { PropTypes, Component } from 'react';

class Baby extends Component {
  render() {
    return (<div className="baby">
      <img src={this.props.option.image} />
    </div>);
  }
}

Baby.propTypes = {
  option: PropTypes.object.isRequired,
};

export default Baby;
