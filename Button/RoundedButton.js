import React from 'react';
import {
  StyleSheet,
  TouchableOpacity, 
  ActivityIndicator,
} from 'react-native';
import {colors} from '../../constants/appStyles';
import TextBox from '../TextBox';

const RoundedButton = ({
  label,
  onPress,
  customContainerStyle,
  defaultLabelStyle,
  disabled = false,
  disabledLabelStyle,
  loading,
}) => {
const disableStyle =  disabled ? {...disabledLabelStyle} : {};
 return ( <TouchableOpacity
    onPress={!disabled && onPress}
    style={[
      disabled ? styles.disabledStyle : styles.defaultContainerStyle,
      customContainerStyle,
    ]}
    activeOpacity={disabled ? 1 : 0.5}>
    {loading ? (
      <ActivityIndicator color="white" />
    ) : (
      <TextBox
        style={{
          ...styles.defaultLabelStyle,
          defaultLabelStyle,
          disableStyle
        }}>
        {label}
      </TextBox>
    )}
  </TouchableOpacity>
)};

const styles = StyleSheet.create({
  defaultContainerStyle: {
    borderRadius: 25,
    backgroundColor: colors.brightBlue,
    paddingVertical: 10,
  },
  disabledStyle: {
    borderRadius: 25,
    backgroundColor: colors.lightGrey2,
    paddingVertical: 10,
  },
  defaultLabelStyle: {
    color: colors.white,
    fontSize: 15,
  },
});

export default RoundedButton;
import React from 'react';
import {
  StyleSheet,
  TouchableOpacity, 
  ActivityIndicator,
} from 'react-native';
import {colors} from '../../constants/appStyles';
import TextBox from '../TextBox';

const RoundedButton = ({
  label,
  onPress,
  customContainerStyle,
  defaultLabelStyle,
  disabled = false,
  disabledLabelStyle,
  loading,
}) => {
const disableStyle =  disabled ? {...disabledLabelStyle} : {};
 return ( <TouchableOpacity
    onPress={!disabled && onPress}
    style={[
      disabled ? styles.disabledStyle : styles.defaultContainerStyle,
      customContainerStyle,
    ]}
    activeOpacity={disabled ? 1 : 0.5}>
    {loading ? (
      <ActivityIndicator color="white" />
    ) : (
      <TextBox
        style={{
          ...styles.defaultLabelStyle,
          defaultLabelStyle,
          disableStyle
        }}>
        {label}
      </TextBox>
    )}
  </TouchableOpacity>
)};

const styles = StyleSheet.create({
  defaultContainerStyle: {
    borderRadius: 25,
    backgroundColor: colors.brightBlue,
    paddingVertical: 10,
  },
  disabledStyle: {
    borderRadius: 25,
    backgroundColor: colors.lightGrey2,
    paddingVertical: 10,
  },
  defaultLabelStyle: {
    color: colors.white,
    fontSize: 15,
  },
});

export default RoundedButton;
