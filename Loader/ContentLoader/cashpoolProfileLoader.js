import React from 'react';
import {View} from 'react-native';
import {deviceDimensions, spacing, scales} from '../../../constants/appStyles';

import ContentLoader from 'react-native-content-loader';
import {Circle, Rect} from 'react-native-svg';

const {width} = deviceDimensions;

const s = v => scales(v);

const CashpoolProfileLoader = () => (
  <View style={{paddingHorizontal: spacing(20), marginBottom: spacing(15)}}>
    <ContentLoader
      viewBox={`0 0 ${width} ${s(186)}`}
      backgroundColor="#f3f3f3"
      foregroundColor="#e0e0e0"
      height={s(186)}
      width="100%"
      speed={1}>
      <Circle cx="50%" cy={scales(55)} r={s(55)} />
      <Rect x="27%" y={s(120)} rx="5" ry="5" width="45%" height={s(25)} />
      <Circle cx="49%" cy={scales(170)} r={s(15)} />
      <Circle cx="55%" cy={scales(170)} r={s(15)} />
      <Circle cx="43%" cy={scales(170)} r={s(15)} />
    </ContentLoader>
  </View>
);

export default CashpoolProfileLoader;
