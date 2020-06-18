import React from 'react';
import {View, StyleSheet} from 'react-native';
import {deviceDimensions, spacing, scales} from '../../../constants/appStyles';

import ContentLoader from 'react-native-content-loader';
import {Circle, Rect} from 'react-native-svg';

const {width} = deviceDimensions;

const s = v => scales(v);

const PendingTransactionLoader = () => (
  <View style={styles.container}>
    <ContentLoader
      viewBox={`0 0 ${width} ${s(130)}`}
      backgroundColor="#f3f3f3"
      foregroundColor="#e0e0e0"
      height={s(130)}
      width="100%"
      speed={1}>
      <Rect x="0" y={s(0)} rx="5" ry="5" width="25%" height={s(12)} />
      <Circle cx={s(25)} cy={s(55)} r={s(25)} />
      <Rect x={s(65)} y={s(31)} rx="5" ry="5" width="63%" height={s(15)} />
      <Rect x="85%" y={s(31)} rx="3" ry="5" width="15%" height={s(15)} />
      <Rect x={s(65)} y={s(55)} rx="5" ry="5" width="40%" height={s(23)} />
      <Rect x={s(65)} y={s(85)} rx="5" ry="5" width="80%" height={s(23)} />
      <Rect x={s(0)} y={s(125)} rx="5" ry="5" width="100%" height={s(0.5)} />
    </ContentLoader>
    <ContentLoader
      viewBox={`0 0 ${width} ${s(130)}`}
      backgroundColor="#f3f3f3"
      foregroundColor="#e0e0e0"
      height={s(130)}
      width="100%"
      speed={1}>
      <Circle cx={s(25)} cy={s(35)} r={s(25)} />
      <Rect x={s(65)} y={s(12.5)} rx="5" ry="5" width="63%" height={s(15)} />
      <Rect x="85%" y={s(12.5)} rx="3" ry="5" width="20%" height={s(15)} />
      <Rect x={s(65)} y={s(35)} rx="5" ry="5" width="80%" height={s(23)} />
      <Rect x={s(65)} y={s(67)} rx="5" ry="5" width="50%" height={s(23)} />
      <Rect x="55%" y={s(98)} rx="5" ry="5" width="30%" height={s(30)} />
      <Rect x={s(65)} y={s(98)} rx="5" ry="5" width="30%" height={s(30)} />
    </ContentLoader>
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing(20),
    marginBottom: spacing(15),
    marginTop: spacing(20),
  },
});

export default PendingTransactionLoader;
