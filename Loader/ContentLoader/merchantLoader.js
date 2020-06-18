import React from 'react';
import {View, StyleSheet} from 'react-native';
import {deviceDimensions, spacing, scales} from '../../../constants/appStyles';

import ContentLoader from 'react-native-content-loader';
import {Circle, Rect} from 'react-native-svg';

const {width} = deviceDimensions;

const s = v => scales(v);

const LoaderLength = ['', ''];

const MerchantLoader = () => (
  <View style={styles.container}>
    {LoaderLength.map(item => [
      <ContentLoader
        viewBox={`0 0 ${width} ${s(110)}`}
        backgroundColor="#f3f3f3"
        foregroundColor="#e0e0e0"
        height={s(110)}
        width="100%"
        speed={1}>
        <Rect x={s(0)} y={s(0)} rx="20" ry="20" width={s(75)} height={s(75)} />
        <Rect x={s(90)} y={s(0)} rx="5" ry="5" width="55%" height={s(20)} />
        <Rect x={s(90)} y={s(30)} rx="5" ry="5" width="30%" height={s(15)} />
        <Rect x={s(90)} y={s(55)} rx="5" ry="5" width="40%" height={s(20)} />
      </ContentLoader>,
      <ContentLoader
        viewBox={`0 0 ${width} ${s(110)}`}
        backgroundColor="#f3f3f3"
        foregroundColor="#e0e0e0"
        height={s(110)}
        width="100%"
        speed={1}>
        <Rect x={s(0)} y={s(0)} rx="20" ry="20" width={s(75)} height={s(75)} />
        <Rect x={s(90)} y={s(0)} rx="5" ry="5" width="30%" height={s(20)} />
        <Rect x={s(90)} y={s(30)} rx="5" ry="5" width="50%" height={s(15)} />
        <Rect x={s(90)} y={s(55)} rx="5" ry="5" width="40%" height={s(20)} />
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

export default MerchantLoader;
