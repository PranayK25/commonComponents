import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {colors, fontSizes, fonts} from '../../constants/appStyles';
import Loader from '.';
import LottieView from 'lottie-react-native';

export const OverlayLoader = props =>
  props.visible ? (
    <View style={[styles.overlayLoader, props.style]}>
      {props.loadingTxt ? (
        <Loader
          textStyle={styles.textStyle}
          loadingTxt={props.loadingTxt || ''}
          size="large"
          color={colors.primary}
        />
      ) : (
        <LottieView
          source={require('../../../assets/money-stack.json')}
          style={{width: '100%'}}
          autoPlay
          loop
        />
      )}
    </View>
  ) : null;

const styles = StyleSheet.create({
  overlayLoader: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    height: '100%',
    width: '100%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textStyle: {
    color: colors.primary,
    fontSize: fontSizes.h5,
    fontFamily: fonts.PoppinsMedium,
  },
});
