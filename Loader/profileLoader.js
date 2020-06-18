import React from 'react';
import {View} from 'react-native';
import {deviceDimensions, spacing} from '../../constants/appStyles';

import ContentLoader from 'react-native-content-loader';
import {Circle, Rect} from 'react-native-svg';

const {width} = deviceDimensions;

const ProfileLoader = () => (
  <View style={{paddingHorizontal: spacing(20), marginBottom: spacing(15)}}>
    <ContentLoader
      viewBox={`0 0 ${width} 205`}
      backgroundColor="#f3f3f3"
      foregroundColor="#e0e0e0"
      height={205}
      width="100%"
      speed={1}>
      <Circle cx="48%" cy="50" r="50" />
      <Rect x="25%" y="110" rx="5" ry="5" width="45%" height="25" />
      <Rect x="15%" y="150" rx="3" ry="5" width="20%" height="15" />
      <Rect x="9%" y="150" rx="3" ry="5" width="5%" height="15" />
      <Rect x="65%" y="150" rx="5" ry="5" width="30%" height="15" />
      <Rect x="59%" y="150" rx="3" ry="5" width="5%" height="15" />
      <Rect x="9%" y="180" rx="0" ry="0" width="77%" height="25" />
    </ContentLoader>
  </View>
);

export default ProfileLoader;
