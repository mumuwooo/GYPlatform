import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ImageBackground, Image } from 'react-native';

const propTypes = {
  getHeight: PropTypes.func,
  uri: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  top: PropTypes.number,
};

export default class ScaledImage extends Component {
  constructor(props) {
    super(props);
    this.state = { source: { uri: this.props.uri } };
  }
  componentWillMount = () => {
    Image.getSize(this.props.uri, (width, height) => {
      if (this.props.width && !this.props.height) {
        this.setState({ width: this.props.width, height: height * (this.props.width / width) });
      } else if (!this.props.width && this.props.height) {
        this.setState({ width: width * (this.props.height / height), height: this.props.height });
      } else {
        this.setState({ width: width, height: height });
      }
    });
  }


  componentDidUpdate = (prevProps, prevState) => {
    // console.log(prevProps);
    // console.log(prevState);
    // this.props.getHeight(this.state.height);
  };
  


  render() {
    return (
      <ImageBackground source={this.state.source} style={{ height: this.state.height, width: this.state.width, marginTop: this.props.top }} {...this.props} />
    );
  }
}
ScaledImage.propTypes = propTypes;