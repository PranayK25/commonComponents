import React from 'react';
import {View, StyleSheet} from 'react-native';
import {deviceDimensions, spacing, scales} from '../../../constants/appStyles';

import ContentLoader from 'react-native-content-loader';
import {Circle, Rect} from 'react-native-svg';

const {width} = deviceDimensions;

const s = v => scales(v);

const LoaderLength = [''];

const GroupTransactionLoader = () => (
  <View style={styles.container}>
    {LoaderLength.map(item => [
      <ContentLoader
        viewBox={`0 0 ${width} ${s(140)}`}
        backgroundColor="#f3f3f3"
        foregroundColor="#e0e0e0"
        height={s(140)}
        width="100%"
        speed={1}>
        <Circle cx={s(25)} cy={s(25)} r={s(25)} />
        <Rect x={s(65)} y={s(5)} rx="5" ry="5" width="63%" height={s(18)} />
        <Rect x="85%" y={s(5)} rx="3" ry="5" width="20%" height={s(18)} />
        <Rect x={s(65)} y={s(30)} rx="5" ry="5" width="40%" height={s(15)} />
        <Rect x={s(65)} y={s(55)} rx="5" ry="5" width="80%" height={s(20)} />
        <Circle cx={s(80)} cy={s(100)} r={s(15)} />
        <Circle cx={s(100)} cy={s(100)} r={s(15)} />
        <Rect x={s(0)} y={s(135)} rx="5" ry="5" width="100%" height={s(0.5)} />
      </ContentLoader>,
      <ContentLoader
        viewBox={`0 0 ${width} ${s(135)}`}
        backgroundColor="#f3f3f3"
        foregroundColor="#e0e0e0"
        height={s(135)}
        width="100%"
        speed={1}>
        <Circle cx={s(25)} cy={s(45)} r={s(25)} />
        <Rect x={s(65)} y={s(25)} rx="5" ry="5" width="40%" height={s(18)} />
        <Rect x="85%" y={s(25)} rx="3" ry="5" width="20%" height={s(18)} />
        <Rect x={s(65)} y={s(50)} rx="5" ry="5" width="60%" height={s(15)} />
        <Rect x={s(65)} y={s(75)} rx="5" ry="5" width="50%" height={s(20)} />
        <Circle cx={s(80)} cy={s(120)} r={s(15)} />
        <Rect x={s(0)} y={s(150)} rx="5" ry="5" width="100%" height={s(0.5)} />
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

export default GroupTransactionLoader;
