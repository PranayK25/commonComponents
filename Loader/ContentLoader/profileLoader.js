import React from 'react';
import {View} from 'react-native';
import {deviceDimensions, spacing, scales} from '../../../constants/appStyles';

import ContentLoader from 'react-native-content-loader';
import {Circle, Rect} from 'react-native-svg';

const {width} = deviceDimensions;

const s = v => scales(v);

const ProfileLoader = () => (
  <View style={{paddingHorizontal: spacing(20), marginBottom: spacing(15)}}>
    <ContentLoader
      viewBox={`0 0 ${width} ${s(225)}`}
      backgroundColor="#f3f3f3"
      foregroundColor="#e0e0e0"
      height={s(225)}
      width="100%"
      speed={1}>
      <Circle cx="48%" cy={scales(60)} r={s(50)} />
      <Rect x="25%" y={s(120)} rx="5" ry="5" width="45%" height={s(25)} />
      <Rect x="15%" y={s(170)} rx="3" ry="5" width="20%" height={s(15)} />
      <Rect x="9%" y={s(170)} rx="3" ry="5" width="5%" height={s(15)} />
      <Rect x="65%" y={s(170)} rx="5" ry="5" width="30%" height={s(15)} />
      <Rect x="59%" y={s(170)} rx="3" ry="5" width="5%" height={s(15)} />
      <Rect x="9%" y={s(200)} rx="0" ry="0" width="77%" height={s(25)} />
    </ContentLoader>
  </View>
);

export default ProfileLoader;
