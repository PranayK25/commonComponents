import React from 'react';
import {View, StyleSheet} from 'react-native';
import {deviceDimensions, spacing, scales} from '../../../constants/appStyles';

import ContentLoader from 'react-native-content-loader';
import {Circle, Rect} from 'react-native-svg';

const {width} = deviceDimensions;

const s = v => scales(v);

const LoaderLength = [''];

const PublicTransactionLoader = () => (
  <View style={styles.container}>
    {LoaderLength.map(item => (
      [<ContentLoader
        viewBox={`0 0 ${width} ${s(145)}`}
        backgroundColor="#f3f3f3"
        foregroundColor="#e0e0e0"
        height={s(145)}
        width="100%"
        speed={1}>
        <Rect x="0" y={s(0)} rx="5" ry="5" width="25%" height={s(12)} />
        <Circle cx={s(25)} cy={s(55)} r={s(25)} />
        <Rect x={s(65)} y={s(31)} rx="5" ry="5" width="65%" height={s(15)} />
        <Rect x="85%" y={s(31)} rx="3" ry="5" width="20%" height={s(15)} />
        <Rect x={s(65)} y={s(55)} rx="5" ry="5" width="40%" height={s(23)} />
        <Circle cx={s(40)} cy={s(105)} r={s(18)} />
        <Rect x={s(65)} y={s(95)} rx="5" ry="5" width="5%" height={s(20)} />
        <Rect x={s(0)} y={s(140)} rx="5" ry="5" width="100%" height={s(0.5)} />
      </ContentLoader>,
      <ContentLoader
        viewBox={`0 0 ${width} ${s(145)}`}
        backgroundColor="#f3f3f3"
        foregroundColor="#e0e0e0"
        height={s(145)}
        width="100%"
        speed={1}>
        <Circle cx={s(25)} cy={s(40)} r={s(25)} />
        <Rect x={s(65)} y={s(16)} rx="5" ry="5" width="65%" height={s(15)} />
        <Rect x="85%" y={s(16)} rx="3" ry="5" width="20%" height={s(15)} />
        <Rect x={s(65)} y={s(40)} rx="5" ry="5" width="75%" height={s(23)} />
        <Rect x={s(65)} y={s(70)} rx="5" ry="5" width="30%" height={s(23)} />
        <Circle cx={s(40)} cy={s(115)} r={s(20)} />
        <Rect x={s(65)} y={s(105)} rx="5" ry="5" width="5%" height={s(18)} />
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

export default PublicTransactionLoader;
