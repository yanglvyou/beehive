/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let Iconshezhi1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M881 512c0-52.4 32.9-96.8 79-114.5-11-43.2-28-83.9-50.2-121.3C864.6 296.3 810 288.1 773 251c-37-37-45.2-91.7-25.1-136.8C710.4 92 669.7 75 626.5 64c-17.8 46.1-62.2 79-114.5 79-52.4 0-96.8-32.9-114.5-79-43.2 11-83.9 28-121.3 50.2 20.1 45.2 11.9 99.8-25.1 136.8-37 37-91.7 45.2-136.8 25.2C92 313.6 75 354.3 64 397.5c46.1 17.8 79 62.2 79 114.5 0 52.4-32.9 96.8-79 114.5 11 43.2 28 83.9 50.2 121.3C159.4 727.7 214 735.9 251 773c37 37 45.2 91.7 25.1 136.8C313.6 932 354.3 949 397.5 960c17.8-46.1 62.2-79 114.5-79 52.4 0 96.8 32.9 114.5 79 43.2-11 83.9-28 121.3-50.2-20.1-45.2-11.9-99.8 25.1-136.8 37-37 91.7-45.2 136.8-25.2C932 710.4 949 669.7 960 626.5c-46.1-17.7-79-62.1-79-114.5zM512 635c-67.9 0-123-55.1-123-123s55.1-123 123-123 123 55.1 123 123-55.1 123-123 123z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconshezhi1.defaultProps = {
  size: 20,
};

Iconshezhi1 = React.memo ? React.memo(Iconshezhi1) : Iconshezhi1;

export default Iconshezhi1;
