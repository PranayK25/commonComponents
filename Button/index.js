import React from 'react';
import {StyleSheet} from 'react-native';
import TextBox from '../TextBox';
import {
  colors,
  fontSizes,
  spacing,
  fontSize,
  fonts,
} from '../../constants/appStyles';
import Loader from '../Loader';
import TouchableRipple from '../TouchableRipple';

const borderRadius = 50;
const borderWidth = 1.5;
const paddingVertical = 12;

const Button = props => {
  const variantStyle = () => {
    let style = {};
    if (props.outline) {
      style = {...style, ...styles.outline, ...styles.primaryOutline};
      style = props.secondary ? {...style, ...styles.secondaryOutline} : style;
    } else {
      style = props.disabled
        ? {
            ...style,
            ...(props.disabledColor ? {backgroundColor: props.disabledColor} : {backgroundColor: styles.greySimple}),
          }
        : {...style, ...styles.primarySimple};
      style = props.secondary ? {...style, ...styles.secondarySimple} : style;
    }

    if (props.circle) {
      const {size} = props;
      style = {
        ...style,
        height: size,
        width: size,
        paddingHorizontal: 0,
        paddingVertical: 0,
      };
    }
    return style;
  };

  const variantTxtStyle = () => {
    let style = {};
    if (props.outline) {
      style = {...style, ...styles.primaryOutlineTxt};
      style = props.secondary
        ? {...style, ...styles.secondaryOutlineTxt}
        : style;
    } else {
      style = props.disabled
        ? {...style, ...styles.secondaryDisabledTxt}
        : {...style, ...styles.primarySimpleTxt};
      style = props.secondary
        ? {...style, ...styles.secondarySimpleTxt}
        : style;
    }
    style = props.circle
      ? {...style, fontSize: fontSize(30), paddingTop: spacing(5)}
      : style;
    return style;
  };

  const getButtonStyle = () => {
    return {
      ...styles.button,
      ...styles[props.type],
      ...variantStyle(),
      ...props.style,
    };
  };
  const {children, loaderColor} = props;
  return (
    <TouchableRipple
      rippleContainerBorderRadius={borderRadius}
      testID="button"
      disabled={props.disabled}
      onPress={props.onPress}
      style={{...getButtonStyle()}}>
      {props.loading ? (
        <Loader size="small" color={loaderColor ? loaderColor : colors.white} />
      ) : (
        <TextBox
          style={{
            ...styles.buttonTxt,
            ...variantTxtStyle(),
            ...props.textStyle,
          }}>
          {children}
        </TextBox>
      )}
    </TouchableRipple>
  );
};

Button.defaultProps = {
  children: '>',
  size: spacing(55),
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius,
    paddingVertical: spacing(paddingVertical),
    paddingHorizontal: spacing(35),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonTxt: {
    fontSize: fontSizes.subtitle1,
  },

  primarySimple: {
    backgroundColor: colors.primary,
  },

  greySimple: {
    backgroundColor: colors.lightGrey2,
  },

  secondarySimple: {
    backgroundColor: colors.secondary,
  },

  primarySimpleTxt: {
    color: colors.secondary,
  },

  secondarySimpleTxt: {
    color: colors.primary,
  },

  secondaryDisabledTxt: {
    color: colors.darkGrey,
  },

  outline: {
    borderWidth,
    paddingVertical: spacing(paddingVertical - borderWidth),
    backgroundColor: 'transparent',
  },

  primaryOutline: {
    borderColor: colors.primary,
  },

  secondaryOutline: {
    borderColor: colors.white,
  },

  primaryOutlineTxt: {
    color: colors.primary,
  },

  secondaryOutlineTxt: {
    color: colors.white,
  },
});
