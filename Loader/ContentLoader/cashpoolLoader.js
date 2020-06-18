import React from 'react';
import {View, StyleSheet} from 'react-native';
import {deviceDimensions, spacing, scales} from '../../../constants/appStyles';

import ContentLoader from 'react-native-content-loader';
import {Circle, Rect} from 'react-native-svg';

const {width} = deviceDimensions;

const s = v => scales(v);

const LoaderLength = ['', '', ''];

const cashpoolLoader = () => (
  <View style={styles.container}>
    {LoaderLength.map(item => [
      <ContentLoader
        viewBox={`0 0 ${width} ${s(145)}`}
        backgroundColor="#f3f3f3"
        foregroundColor="#e0e0e0"
        height={s(75)}
        width="100%"
        speed={1}>
        <Circle cx={s(28)} cy={s(40)} r={s(28)} />
        <Rect x={s(65)} y={s(35)} rx="5" ry="5" width="35%" height={s(20)} />
        <Circle cx="78%" cy={s(40)} r={s(18)} />
        <Circle cx="85%" cy={s(40)} r={s(18)} />
        <Circle cx="92%" cy={s(40)} r={s(18)} />
      </ContentLoader>,
      <ContentLoader
        viewBox={`0 0 ${width} ${s(145)}`}
        backgroundColor="#f3f3f3"
        foregroundColor="#e0e0e0"
        height={s(75)}
        width="100%"
        speed={1}>
        <Circle cx={s(28)} cy={s(40)} r={s(28)} />
        <Rect x={s(65)} y={s(35)} rx="5" ry="5" width="35%" height={s(20)} />
        <Circle cx="78%" cy={s(40)} r={s(18)} />
        <Circle cx="85%" cy={s(40)} r={s(18)} />
        <Circle cx="92%" cy={s(40)} r={s(18)} />
      </ContentLoader>,
    ])}
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing(20),
    marginBottom: spacing(15),
    marginTop: spacing(0),
  },
});

export default cashpoolLoader;
