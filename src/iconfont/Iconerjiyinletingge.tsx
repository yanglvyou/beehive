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

let Iconerjiyinletingge: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1026 1024" width={size} height={size} {...rest}>
      <Path
        d="M627.829 167.99a191.923 191.923 0 0 0-229.614 0 31.936 31.936 0 0 0 37.997 51.342 128.462 128.462 0 0 1 153.62 0 31.936 31.936 0 0 0 37.997-51.343zM513.022 2.043C231.269 2.044 2.044 231.269 2.044 513.022v319.361A31.922 31.922 0 0 0 33.97 864.33h63.893v127.744a31.926 31.926 0 0 0 63.851 0v-63.893h79.672a48.124 48.124 0 0 0 48.073-48.072v-350.94a48.124 48.124 0 0 0-48.073-48.073h-95.45a48.124 48.124 0 0 0-48.073 48.073v15.779H65.916v-31.926c0-246.537 200.57-447.106 447.106-447.106s447.106 200.57 447.106 447.106v31.926H928.18v-15.78a48.124 48.124 0 0 0-48.072-48.072h-95.451a48.124 48.124 0 0 0-48.073 48.073v350.94a48.124 48.124 0 0 0 48.073 48.072h79.672v63.893a31.926 31.926 0 0 0 63.851 0V864.33h63.893A31.922 31.922 0 0 0 1024 832.383V513.022C1024 231.269 794.775 2.044 513.022 2.044zM161.714 544.948h63.893V864.33h-63.893V544.948zM97.863 608.84v191.596H65.916V608.84h31.947zM800.437 864.33V544.948h63.893V864.33h-63.893z m159.69-63.893h-31.946V608.84h31.947v191.596z m-447.105-255.49a31.91 31.91 0 0 0-31.926 31.947v255.49a31.926 31.926 0 1 0 63.852 0v-255.49a31.91 31.91 0 0 0-31.926-31.946z m127.744 63.894a31.885 31.885 0 0 0-31.925 31.925v127.745a31.926 31.926 0 0 0 63.851 0V640.766a31.885 31.885 0 0 0-31.926-31.925z m-255.489 0a31.885 31.885 0 0 0-31.925 31.925v127.745a31.926 31.926 0 0 0 63.851 0V640.766a31.885 31.885 0 0 0-31.926-31.925z"
        fill={getIconColor(color, 0, '#F82307')}
      />
    </Svg>
  );
};

Iconerjiyinletingge.defaultProps = {
  size: 20,
};

Iconerjiyinletingge = React.memo ? React.memo(Iconerjiyinletingge) : Iconerjiyinletingge;

export default Iconerjiyinletingge;
