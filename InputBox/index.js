import React, {useState} from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  Platform,
  TouchableOpacity,
} from 'react-native';

import {
  colors,
  getRgbaColor,
  fontSizes,
  fonts,
  spacing,
} from '../../constants/appStyles';
import TextBox from '../TextBox';

const isIos = Platform.OS === 'ios';

export const InputBox = props => {
  const [isFocused, setIsFocused] = useState(false);
  const variantStyle = () => {
    let style = {};
    if (props.borderBottom) {
      style = isFocused
        ? {borderBottomColor: colors.tint}
        : {borderBottomColor: getRgbaColor('borderDarkGrey', 0.3)};
    }
    return style;
  };

  const isFocuseInputStyle = {
    color: props.focusColor,
    fontFamily: fonts.PoppinsRegular,
  };
  const editable = props.editable !== false;
  const errorStyle = props.error ? styles.errorStyle : {};

  const onFocus = () => {
    setIsFocused(true);
    props.onFocus && props.onFocus();
  };

  const onBlur = () => {
    setIsFocused(false);
    props.onBlur && props.onBlur();
  };

  const getContainerStyle = () => {
    return {
      ...styles.container,
      ...props.inputStyle,
      ...variantStyle(),
      ...errorStyle,
    };
  };

  const getInputStyle = () => {
    return {
      ...styles.inputBox,
      ...(isFocused ? isFocuseInputStyle : {}),
      ...props.input,
      // ...{fontFamily: f},
    };
  };

  const {startAdornment} = props;
  const WrapperComponent = props.onPress ? TouchableOpacity : View;
  return (
    <WrapperComponent onPress={props.onPress} style={{...getContainerStyle()}}>
      {startAdornment ? (
        <View style={[styles.startAdornment, props.adornmentStyle]}>
          {startAdornment}
        </View>
      ) : null}
      {props.prifix ? (
        <TextBox style={styles.textStyle} font="RobotoBold" type="body3">
          {props.prifix}
        </TextBox>
      ) : null}
      <TextInput
        selectionColor={props.selectionColor ? props.selectionColor : null}
        allowFontScaling={false}
        style={{...getInputStyle()}}
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderTextColor}
        onChangeText={props.onChangeText}
        value={props.value}
        keyboardType={
          props.keyboardType !== undefined ? props.keyboardType : 'default'
        }
        ref={ref => props.setRef && props.setRef(ref)}
        secureTextEntry={props.isPassword}
        editable={editable}
        maxLength={props.maxLength}
        multiline={props.multiline}
        numberOfLines={1}
        autoCorrect={props.autoCorrect}
        {...props}
        onBlur={onBlur}
        onFocus={onFocus}
      />
    </WrapperComponent>
  );
};

InputBox.defaultProps = {
  placeholderTextColor: colors.yellowGrey,
  borderBottom: true,
  focusColor: colors.tint,
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 0,
  },
  textStyle: {
    paddingBottom: spacing(isIos ? 0 : 6),
  },
  inputBox: {
    width: '100%',
    color: colors.darkGrey,
    paddingVertical: isIos ? 5 : 0,
    fontSize: fontSizes.body1,
    fontFamily: fonts.PoppinsRegular,
    paddingHorizontal: 10,
  },

  errorStyle: {
    borderBottomColor: 'red',
  },

  startAdornment: {
    marginRight: spacing(5),
    borderRightColor: getRgbaColor('borderDarkGrey', 0.3),
    borderRightWidth: 1,
    paddingHorizontal: spacing(15),
  },
});
