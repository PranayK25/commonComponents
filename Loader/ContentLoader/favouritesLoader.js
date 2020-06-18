
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {deviceDimensions, spacing, scales} from '../../../constants/appStyles';

import ContentLoader from 'react-native-content-loader';
import {Circle, Rect} from 'react-native-svg';

const {width} = deviceDimensions;

const s = v => scales(v);

const LoaderLength = [''];

const FavouritesLoader = () => (
  <View style={styles.container}>
    {LoaderLength.map(item => [
      <ContentLoader
        viewBox={`0 0 ${width} ${s(110)}`}
        backgroundColor="#f3f3f3"
        foregroundColor="#e0e0e0"
        height={s(135)}
        width="100%"
        speed={1}>
        <Rect x="0" y={s(10)} rx="5" ry="5" width="50%" height={s(18)} />
        <Rect x={s(0)} y={s(51)} rx="5" ry="5" width="15%" height={s(55)} />
        <Circle x={s(120)} cy={s(80)} r={s(30)} />
        <Circle x={s(210)} cy={s(80)} r={s(30)} />
        <Circle x={s(300)} cy={s(80)} r={s(30)} />
        <Rect x={s(0)} y={s(120)} rx="5" ry="5" width="15%" height={s(10)} />
        <Rect x={s(90)} y={s(120)} rx="5" ry="5" width="15%" height={s(10)} />
        <Rect x={s(179)} y={s(120)} rx="5" ry="5" width="15%" height={s(10)} />
        <Rect x={s(270)} y={s(120)} rx="5" ry="5" width="15%" height={s(10)} />
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

export default FavouritesLoader;
