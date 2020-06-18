import React from 'react';
import {deviceDimensions, scales} from '../../../constants/appStyles';

import ContentLoader from 'react-native-content-loader';
import {Rect} from 'react-native-svg';

const {width} = deviceDimensions;

const s = v => scales(v);

const LineLoader = () => (
  <ContentLoader
    viewBox={`0 0 ${width} ${s(15)}`}
    backgroundColor="#f3f3f3"
    foregroundColor="#e0e0e0"
    height={s(15)}
    width="100%"
    speed={1}>
    <Rect x="0" y={s(0)} rx="5" ry="5" width="105%" height={s(15)} />
  </ContentLoader>
);

export default LineLoader;
