import React from 'react';
import {View, StyleSheet} from 'react-native';
import {deviceDimensions, spacing, scales} from '../../../constants/appStyles';

import ContentLoader from 'react-native-content-loader';
import {Rect} from 'react-native-svg';

const {width} = deviceDimensions;

const s = v => scales(v);

const LoaderLength = ['', ''];

const HorizontalPromotionsLoader = () => (
  <View style={styles.container}>
    <ContentLoader
      viewBox={`0 0 ${width} ${s(120)}`}
      backgroundColor="#f3f3f3"
      foregroundColor="#e0e0e0"
      height={s(120)}
      width="100%"
      speed={1}>
      <Rect x={s(10)} y={s(10)} rx="5" ry="5" width="80%" height={s(20)} />
      <Rect x="90%" y={s(10)} rx="5" ry="5" width="30%" height={s(20)} />
      <Rect x={s(10)} y={s(40)} rx="5" ry="5" width="50%" height={s(20)} />
      <Rect x="90%" y={s(40)} rx="5" ry="5" width="30%" height={s(20)} />
      <Rect x={s(10)} y={s(70)} rx="5" ry="5" width="80%" height={s(15)} />
      <Rect x="90%" y={s(70)} rx="5" ry="5" width="30%" height={s(15)} />
      <Rect x={s(10)} y={s(95)} rx="5" ry="5" width="40%" height={s(15)} />
      <Rect x="90%" y={s(95)} rx="5" ry="5" width="30%" height={s(15)} />
    </ContentLoader>
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingLeft: spacing(20),
    marginBottom: spacing(15),
    marginTop: spacing(20),
  },
});

export default HorizontalPromotionsLoader;
