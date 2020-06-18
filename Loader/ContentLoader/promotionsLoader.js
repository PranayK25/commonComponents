import React from 'react';
import {View, StyleSheet} from 'react-native';
import {deviceDimensions, spacing, scales} from '../../../constants/appStyles';

import ContentLoader from 'react-native-content-loader';
import {Rect} from 'react-native-svg';

const {width} = deviceDimensions;

const s = v => scales(v);

const LoaderLength = ['', ''];

const PromotionsLoader = () => (
  <View style={styles.container}>
    {LoaderLength.map(item => [
      <ContentLoader
        viewBox={`0 0 ${width} ${s(160)}`}
        backgroundColor="#f3f3f3"
        foregroundColor="#e0e0e0"
        height={s(160)}
        width="100%"
        speed={1}>
        <Rect x={s(0)} y={s(0)} rx="20" ry="20" width={s(75)} height={s(75)} />
        <Rect x={s(95)} y={s(0)} rx="5" ry="5" width="75%" height={s(20)} />
        <Rect x={s(95)} y={s(30)} rx="5" ry="5" width="30%" height={s(20)} />
        <Rect x={s(95)} y={s(60)} rx="5" ry="5" width="70%" height={s(15)} />
        <Rect x={s(95)} y={s(85)} rx="5" ry="5" width="50%" height={s(15)} />
        <Rect x={s(95)} y={s(110)} rx="5" ry="5" width="15%" height={s(25)} />
        <Rect x="47%" y={s(110)} rx="5" ry="5" width="35%" height={s(25)} />
      </ContentLoader>,
      <ContentLoader
        viewBox={`0 0 ${width} ${s(160)}`}
        backgroundColor="#f3f3f3"
        foregroundColor="#e0e0e0"
        height={s(160)}
        width="100%"
        speed={1}>
        <Rect x={s(0)} y={s(0)} rx="20" ry="20" width={s(75)} height={s(75)} />
        <Rect x={s(95)} y={s(0)} rx="5" ry="5" width="75%" height={s(20)} />
        <Rect x={s(95)} y={s(30)} rx="5" ry="5" width="30%" height={s(20)} />
        <Rect x={s(95)} y={s(60)} rx="5" ry="5" width="70%" height={s(15)} />
        <Rect x={s(95)} y={s(85)} rx="5" ry="5" width="50%" height={s(15)} />
        <Rect x={s(95)} y={s(110)} rx="5" ry="5" width="15%" height={s(25)} />
        <Rect x="47%" y={s(110)} rx="5" ry="5" width="35%" height={s(25)} />
      </ContentLoader>
      
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

export default PromotionsLoader;
