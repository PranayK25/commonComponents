import React from 'react';
import {TouchableOpacity, Image, View, StyleSheet} from 'react-native';
import TextBox from '../TextBox';
import {Checked, Unchecked} from '../../../assets';
import {checkSVG, greenCheckSVG} from '../../constants/commonSvg';
import {spacing, fontSize, scales} from '../../constants/appStyles';

const Checkbox = ({
  checked,
  onCheck,
  text,
  rightElement,
  style,
  isGreenCheck,
}) => {
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity onPress={() => onCheck()}>
        {isGreenCheck ? (
          <View>{checked ? checkSVG('1.6%') : null}</View>
        ) : (
          <Image
            resizeMode="contain"
            source={checked ? Checked : Unchecked}
            style={styles.checkboxImage}
          />
        )}
      </TouchableOpacity>
      {isGreenCheck ? null : (
        <View>
          <TextBox type="body3" color="silver" style={styles.checkboxText}>
            {text}
          </TextBox>
        </View>
      )}
      {rightElement ? rightElement : null}
    </View>
  );
};

Checkbox.defaultProps = {
  onCheck: () => null,
  checked: false,
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: spacing(10),
  },
  checkboxText: {
    marginRight: spacing(52),
  },
  checkboxImage: {
    height: scales(36),
    width: scales(36),
    marginRight: spacing(14),
  },
});

export default Checkbox;
