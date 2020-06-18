import React from 'react';
import {View, StyleSheet} from 'react-native';
import {deviceDimensions, spacing, scales} from '../../../constants/appStyles';

import ContentLoader from 'react-native-content-loader';
import {Circle, Rect} from 'react-native-svg';

const {width} = deviceDimensions;

const s = v => scales(v);

const LoaderLength = ['', ''];

const FeedLoader = () => (
  <View style={styles.container}>
    {LoaderLength.map(item => [
      <ContentLoader
        viewBox={`0 0 ${width} ${s(145)}`}
        backgroundColor="#f3f3f3"
        foregroundColor="#e0e0e0"
        height={s(145)}
        width="100%"
        speed={1}>
        <Circle cx={s(28)} cy={s(40)} r={s(28)} />
        <Circle cx={s(68)} cy={s(40)} r={s(28)} />
        <Rect x={s(103)} y={s(15)} rx="5" ry="5" width="70%" height={s(15)} />
        <Rect x={s(103)} y={s(37)} rx="3" ry="5" width="40%" height={s(15)} />
        <Rect x={s(103)} y={s(60)} rx="5" ry="5" width="70%" height={s(20)} />
        <Circle cx={s(50)} cy={s(105)} r={s(18)} />
        <Rect x={s(75)} y={s(95)} rx="5" ry="5" width="5%" height={s(20)} />
        <Rect x={s(0)} y={s(140)} rx="5" ry="5" width="100%" height={s(0.5)} />
      </ContentLoader>,
      <ContentLoader
        viewBox={`0 0 ${width} ${s(145)}`}
        backgroundColor="#f3f3f3"
        foregroundColor="#e0e0e0"
        height={s(145)}
        width="100%"
        speed={1}>
        <Circle cx={s(28)} cy={s(40)} r={s(28)} />
        <Circle cx={s(68)} cy={s(40)} r={s(28)} />
        <Rect x={s(103)} y={s(15)} rx="5" ry="5" width="70%" height={s(15)} />
        <Rect x={s(103)} y={s(37)} rx="3" ry="5" width="40%" height={s(15)} />
        <Rect x={s(103)} y={s(60)} rx="5" ry="5" width="30%" height={s(20)} />
        <Circle cx={s(50)} cy={s(105)} r={s(18)} />
        <Rect x={s(75)} y={s(95)} rx="5" ry="5" width="5%" height={s(20)} />
        <Rect x={s(0)} y={s(140)} rx="5" ry="5" width="100%" height={s(0.5)} />
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

export default FeedLoader;
