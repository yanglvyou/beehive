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

let Iconshouye: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M954.181818 488.727273c-2.327273 0 2.327273 0 0 0z m-139.636363 535.272727c4.654545 0 4.654545 0 0 0z m209.454545-584.145455c0-18.618182-9.309091-30.254545-23.272727-44.218181L570.181818 25.6S537.6 0 512 0c-23.272727 0-62.836364 30.254545-62.836364 30.254545L23.272727 395.636364c-18.618182 13.963636-23.272727 23.272727-23.272727 44.218181 0 23.272727 0 48.872727 69.818182 48.872728h69.818182v442.181818c0 60.509091 34.909091 93.090909 69.818181 93.090909h256V791.272727c0-51.2 41.890909-93.090909 93.09091-93.090909s93.090909 41.890909 93.090909 93.090909v232.727273h162.909091c39.563636 0 69.818182-58.181818 69.818181-93.090909V488.727273h69.818182c67.490909 0 69.818182-23.272727 69.818182-48.872728z"
        fill={getIconColor(color, 0, '#666666')}
      />
    </Svg>
  );
};

Iconshouye.defaultProps = {
  size: 20,
};

Iconshouye = React.memo ? React.memo(Iconshouye) : Iconshouye;

export default Iconshouye;
