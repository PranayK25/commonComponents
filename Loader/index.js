import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import TextBox from '../TextBox';

class Loader extends Component {
  render() {
    let { color, size, loadingTxt, style, textStyle } = this.props;
    size = size || 'large';
    return (
      <View style={[styles.container, style]}>
        <ActivityIndicator size={size} color={color} />
        {loadingTxt ? <TextBox style={{...styles.loadingTxt, ...textStyle}} color="white">{loadingTxt}</TextBox> : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  loadingTxt: {
    marginTop: 5,
  },
});

export default Loader;
