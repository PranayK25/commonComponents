import React from 'react';
import {View, StyleSheet} from 'react-native';
import {deviceDimensions, spacing, scales} from '../../../constants/appStyles';

import ContentLoader from 'react-native-content-loader';
import {Circle, Rect} from 'react-native-svg';

const {width} = deviceDimensions;

const s = v => scales(v);

const LoaderLength = [''];

const CompleteTransactionLoader = () => (
  <View style={styles.container}>
    {LoaderLength.map(item => (
      [<ContentLoader
        viewBox={`0 0 ${width} ${s(135)}`}
        backgroundColor="#f3f3f3"
        foregroundColor="#e0e0e0"
        height={s(135)}
        width="100%"
        speed={1}>
        <Rect x="0" y={s(0)} rx="5" ry="5" width="25%" height={s(12)} />
        <Circle cx={s(25)} cy={s(55)} r={s(25)} />
        <Rect x={s(65)} y={s(31)} rx="5" ry="5" width="63%" height={s(15)} />
        <Rect x="85%" y={s(31)} rx="3" ry="5" width="20%" height={s(15)} />
        <Rect x={s(65)} y={s(55)} rx="5" ry="5" width="40%" height={s(23)} />
        <Rect x={s(65)} y={s(85)} rx="5" ry="5" width="80%" height={s(23)} />
        <Rect x={s(0)} y={s(130)} rx="5" ry="5" width="100%" height={s(0.5)} />
      </ContentLoader>,
      <ContentLoader
        viewBox={`0 0 ${width} ${s(115)}`}
        backgroundColor="#f3f3f3"
        foregroundColor="#e0e0e0"
        height={s(115)}
        width="100%"
        speed={1}>
        <Circle cx={s(25)} cy={s(40)} r={s(25)} />
        <Rect x={s(65)} y={s(16)} rx="5" ry="5" width="63%" height={s(15)} />
        <Rect x="85%" y={s(16)} rx="3" ry="5" width="20%" height={s(15)} />
        <Rect x={s(65)} y={s(40)} rx="5" ry="5" width="75%" height={s(23)} />
        <Rect x={s(65)} y={s(70)} rx="5" ry="5" width="30%" height={s(23)} />
      </ContentLoader>]
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing(20),
    marginBottom: spacing(15),
    marginTop: spacing(20),
  },
});

export default CompleteTransactionLoader;
