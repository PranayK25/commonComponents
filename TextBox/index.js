import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {
  colors,
  fonts,
  fontSizes,
  deviceDimensions,
} from '../../constants/appStyles';

const TextBox = props => {
  const {type, color, font} = props;
  const style = type ? styles[type] : {};
  textStyle = () => {
    return {
      ...style,
      color: colors[color],
      fontFamily: fonts[font],
      ...props.style,
    };
  };

  return (
    <Text allowFontScaling={false} {...props} style={[textStyle()]}>
      {props.children}
    </Text>
  );
};

TextBox.defaultProps = {
  color: 'darkGrey',
  font: 'PoppinsRegular',
};

export default TextBox;

const styles = StyleSheet.create({
  heading: {
    fontSize: fontSizes.heading,
    color: colors.white,
  },

  title: {
    fontSize: fontSizes.title,
    color: colors.darkGrey,
  },

  h1: {
    fontSize: fontSizes.h1,
  },

  h2: {
    fontSize: fontSizes.h2,
  },

  h3: {
    fontSize: fontSizes.h3,
  },

  h4: {
    fontSize: fontSizes.h4,
  },

  h5: {
    fontSize: fontSizes.h5,
  },

  h6: {
    fontSize: fontSizes.h6,
  },

  h7: {
    fontSize: fontSizes.h7,
  },

  body1: {
    fontSize: fontSizes.body1,
  },

  body2: {
    fontSize: fontSizes.body2,
  },

  body3: {
    fontSize: fontSizes.body3,
  },

  subtitle1: {
    fontSize: fontSizes.subtitle1,
  },

  subtitle2: {
    fontSize: fontSizes.subtitle2,
  },

  caption: {
    fontSize: fontSizes.caption,
  },

  header: {
    fontSize: deviceDimensions.HPTDP('4.5%'), // 33
  },

  extraLarge: {
    fontSize: fontSizes.extraLarge,
  },

  large: {
    fontSize: fontSizes.large,
  },

  small: {
    fontSize: fontSizes.small,
  },

  error: {
    color: colors.danger,
    fontSize: fontSizes.body2,
  },
});
