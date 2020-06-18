import React from 'react';
import {View, StyleSheet} from 'react-native';
import {deviceDimensions, spacing, scales} from '../../../constants/appStyles';

import ContentLoader from 'react-native-content-loader';
import {Circle, Rect} from 'react-native-svg';

const {width} = deviceDimensions;

const s = v => scales(v);

const LoaderLength = [''];

const MostPopularLoader = () => (
  <View style={styles.container}>
    {LoaderLength.map(item => [
      <ContentLoader
        viewBox={`0 0 ${width} ${s(110)}`}
        backgroundColor="#f3f3f3"
        foregroundColor="#e0e0e0"
        height={s(150)}
        width="100%"
        speed={1}>
        <Rect x="0" y={s(10)} rx="5" ry="5" width="50%" height={s(20)} />
        <Rect x={s(0)} y={s(55)} rx="5" ry="5" width="20%" height={s(90)} />
        <Rect x={s(95)} y={s(55)} rx="5" ry="5" width="20%" height={s(90)} />
        <Rect x={s(190)} y={s(55)} rx="5" ry="5" width="20%" height={s(90)} />
        <Rect x={s(285)} y={s(55)} rx="5" ry="5" width="20%" height={s(90)} />
        <Rect x={s(380)} y={s(55)} rx="5" ry="5" width="20%" height={s(90)} />
      </ContentLoader>,
    ])}
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing(20),
    marginBottom: spacing(15),
    marginTop: spacing(20),
  },
});

export default MostPopularLoader;
