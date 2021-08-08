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

let Iconmimabukejian: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M257.28 694.2976C142.6432 634.0096 54.3488 554.0608 51.2 524.3648c0-101.6832 257.4592-268.3392 460.8-268.3392 50.6624 0 102.7584 12.0064 152.9088 30.6944l39.3984-39.3984C640.9984 221.3632 574.7456 204.8 512 204.8 300.2368 204.8 0 376.7808 0 524.8256c0 53.2224 96.8448 141.2096 219.5968 207.2064l37.6832-37.7344zM801.152 295.296l-37.8112 37.76c116.4544 65.8688 205.1584 155.2896 209.3056 190.1056C954.9568 575.9488 700.0064 768 512 768c-50.4832 0-103.1424-11.4944-154.1632-29.3888l-39.168 39.1424C384.0768 803.0464 451.4304 819.2 512 819.2c205.6704 0 512-215.4496 512-294.3744 0-55.5776-96.4608-155.9808-222.848-229.5296z"
        fill={getIconColor(color, 0, '#CCCCCC')}
      />
      <Path
        d="M393.0624 558.4896A126.208 126.208 0 0 1 384 512.0256c0-70.5536 57.4464-128 128-128 16.4608 0 32.0512 3.3792 46.5152 9.0624l38.7584-38.7328A179.2 179.2 0 0 0 332.8 512.0256c0 30.8736 7.808 59.904 21.504 85.2736l38.7584-38.8096zM630.9376 465.5104A127.232 127.232 0 0 1 640 512.0256c0 70.5536-57.4464 128-128 128a126.72 126.72 0 0 1-46.5152-9.088l-38.784 38.8096a179.2 179.2 0 0 0 242.944-242.944l-38.7072 38.7072zM102.4 947.2a25.5744 25.5744 0 0 1-18.0992-43.6992l819.2-819.2a25.5744 25.5744 0 1 1 36.1984 36.1984l-819.2 819.2A25.5744 25.5744 0 0 1 102.4 947.2z"
        fill={getIconColor(color, 1, '#CCCCCC')}
      />
    </Svg>
  );
};

Iconmimabukejian.defaultProps = {
  size: 20,
};

Iconmimabukejian = React.memo ? React.memo(Iconmimabukejian) : Iconmimabukejian;

export default Iconmimabukejian;
