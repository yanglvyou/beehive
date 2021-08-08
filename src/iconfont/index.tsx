/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import Iconshouye from './Iconshouye';
import Iconshezhi1 from './Iconshezhi1';
import Iconzujian from './Iconzujian';
import Iconshezhi from './Iconshezhi';
import Iconsaoma from './Iconsaoma';
import Iconxiangxia1 from './Iconxiangxia1';
import Iconguanbi from './Iconguanbi';
import IconyinpinbofangqiXiazaiwanchengIcon from './IconyinpinbofangqiXiazaiwanchengIcon';
import IconiconTest1 from './IconiconTest1';
import Iconhuojian1 from './Iconhuojian1';
import Iconhuojian2 from './Iconhuojian2';
import IconrocketEasyiCopy from './IconrocketEasyiCopy';
import Iconhuojian from './Iconhuojian';
import Iconzuo from './Iconzuo';
import Icontuichu from './Icontuichu';
import Icontuichudenglu from './Icontuichudenglu';
import Iconmenu from './Iconmenu';
import Iconmenu1 from './Iconmenu1';
import Iconmenu2 from './Iconmenu2';
import Iconmenu3 from './Iconmenu3';
import Iconmimabukejian from './Iconmimabukejian';
import Iconmimakejian from './Iconmimakejian';
import Iconzhengque from './Iconzhengque';
import Iconxingmingyonghumingnicheng from './Iconxingmingyonghumingnicheng';
import Iconmima from './Iconmima';
import Iconhuanyingni from './Iconhuanyingni';
import Iconzongyi from './Iconzongyi';
import Icondongman from './Icondongman';
import Iconhuiyuan from './Iconhuiyuan';
import Icontinggeshiqu from './Icontinggeshiqu';
import Iconhuiyuan1 from './Iconhuiyuan1';
import Iconhuiyuan2 from './Iconhuiyuan2';
import Iconhuiyuan3 from './Iconhuiyuan3';
import Iconerjiyinletingge from './Iconerjiyinletingge';
import Iconhuiyuan7 from './Iconhuiyuan7';
import Iconhuiyuan4 from './Iconhuiyuan4';
import Iconbofang1 from './Iconbofang1';
import Iconshanchu from './Iconshanchu';
import Iconshangyishou from './Iconshangyishou';
import Iconxiayishou from './Iconxiayishou';
import Iconzantingtingzhi from './Iconzantingtingzhi';
import Iconbofang from './Iconbofang';
import IconarrowDown from './IconarrowDown';
import Iconshijian from './Iconshijian';
import Iconjia from './Iconjia';
import Iconjian from './Iconjian';
import Iconmeiyoushuju from './Iconmeiyoushuju';
import Iconshengyin from './Iconshengyin';
import IconiconTest from './IconiconTest';
import Iconshengyin1 from './Iconshengyin1';
import Iconxihuan from './Iconxihuan';
import Iconxihuantianchong from './Iconxihuantianchong';
import Iconziyuan from './Iconziyuan';
import Icongengduo from './Icongengduo';
import Iconfaxian from './Iconfaxian';
import Iconiconfontxingxing from './Iconiconfontxingxing';
import Iconzhanghao from './Iconzhanghao';
import Iconren from './Iconren';
import Iconshoucang from './Iconshoucang';
import Iconyemian from './Iconyemian';
import Iconyemian1 from './Iconyemian1';
import Iconindex from './Iconindex';
import Iconindex1 from './Iconindex1';

export type IconNames = 'iconshouye' | 'iconshezhi1' | 'iconzujian' | 'iconshezhi' | 'iconsaoma' | 'iconxiangxia1' | 'iconguanbi' | 'iconyinpinbofangqi_xiazaiwancheng_icon-' | 'iconicon-test1' | 'iconhuojian1' | 'iconhuojian2' | 'iconrocket__easyi-copy' | 'iconhuojian' | 'iconzuo' | 'icontuichu' | 'icontuichudenglu' | 'iconmenu' | 'iconmenu1' | 'iconmenu2' | 'iconmenu3' | 'iconmimabukejian' | 'iconmimakejian' | 'iconzhengque' | 'iconxingmingyonghumingnicheng' | 'iconmima' | 'iconhuanyingni' | 'iconzongyi' | 'icondongman' | 'iconhuiyuan' | 'icontinggeshiqu' | 'iconhuiyuan1' | 'iconhuiyuan2' | 'iconhuiyuan3' | 'iconerjiyinletingge' | 'iconhuiyuan7' | 'iconhuiyuan4' | 'iconbofang1' | 'iconshanchu' | 'iconshangyishou' | 'iconxiayishou' | 'iconzantingtingzhi' | 'iconbofang' | 'iconarrow-down' | 'iconshijian' | 'iconjia' | 'iconjian' | 'iconmeiyoushuju' | 'iconshengyin' | 'iconicon-test' | 'iconshengyin1' | 'iconxihuan-' | 'iconxihuantianchong' | 'iconziyuan' | 'icongengduo' | 'iconfaxian' | 'iconiconfontxingxing' | 'iconzhanghao' | 'iconren' | 'iconshoucang' | 'iconyemian' | 'iconyemian1' | 'iconindex' | 'iconindex1';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

let IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'iconshouye':
      return <Iconshouye key="1" {...rest} />;
    case 'iconshezhi1':
      return <Iconshezhi1 key="2" {...rest} />;
    case 'iconzujian':
      return <Iconzujian key="3" {...rest} />;
    case 'iconshezhi':
      return <Iconshezhi key="4" {...rest} />;
    case 'iconsaoma':
      return <Iconsaoma key="5" {...rest} />;
    case 'iconxiangxia1':
      return <Iconxiangxia1 key="6" {...rest} />;
    case 'iconguanbi':
      return <Iconguanbi key="7" {...rest} />;
    case 'iconyinpinbofangqi_xiazaiwancheng_icon-':
      return <IconyinpinbofangqiXiazaiwanchengIcon key="8" {...rest} />;
    case 'iconicon-test1':
      return <IconiconTest1 key="9" {...rest} />;
    case 'iconhuojian1':
      return <Iconhuojian1 key="10" {...rest} />;
    case 'iconhuojian2':
      return <Iconhuojian2 key="11" {...rest} />;
    case 'iconrocket__easyi-copy':
      return <IconrocketEasyiCopy key="12" {...rest} />;
    case 'iconhuojian':
      return <Iconhuojian key="13" {...rest} />;
    case 'iconzuo':
      return <Iconzuo key="14" {...rest} />;
    case 'icontuichu':
      return <Icontuichu key="15" {...rest} />;
    case 'icontuichudenglu':
      return <Icontuichudenglu key="16" {...rest} />;
    case 'iconmenu':
      return <Iconmenu key="17" {...rest} />;
    case 'iconmenu1':
      return <Iconmenu1 key="18" {...rest} />;
    case 'iconmenu2':
      return <Iconmenu2 key="19" {...rest} />;
    case 'iconmenu3':
      return <Iconmenu3 key="20" {...rest} />;
    case 'iconmimabukejian':
      return <Iconmimabukejian key="21" {...rest} />;
    case 'iconmimakejian':
      return <Iconmimakejian key="22" {...rest} />;
    case 'iconzhengque':
      return <Iconzhengque key="23" {...rest} />;
    case 'iconxingmingyonghumingnicheng':
      return <Iconxingmingyonghumingnicheng key="24" {...rest} />;
    case 'iconmima':
      return <Iconmima key="25" {...rest} />;
    case 'iconhuanyingni':
      return <Iconhuanyingni key="26" {...rest} />;
    case 'iconzongyi':
      return <Iconzongyi key="27" {...rest} />;
    case 'icondongman':
      return <Icondongman key="28" {...rest} />;
    case 'iconhuiyuan':
      return <Iconhuiyuan key="29" {...rest} />;
    case 'icontinggeshiqu':
      return <Icontinggeshiqu key="30" {...rest} />;
    case 'iconhuiyuan1':
      return <Iconhuiyuan1 key="31" {...rest} />;
    case 'iconhuiyuan2':
      return <Iconhuiyuan2 key="32" {...rest} />;
    case 'iconhuiyuan3':
      return <Iconhuiyuan3 key="33" {...rest} />;
    case 'iconerjiyinletingge':
      return <Iconerjiyinletingge key="34" {...rest} />;
    case 'iconhuiyuan7':
      return <Iconhuiyuan7 key="35" {...rest} />;
    case 'iconhuiyuan4':
      return <Iconhuiyuan4 key="36" {...rest} />;
    case 'iconbofang1':
      return <Iconbofang1 key="37" {...rest} />;
    case 'iconshanchu':
      return <Iconshanchu key="38" {...rest} />;
    case 'iconshangyishou':
      return <Iconshangyishou key="39" {...rest} />;
    case 'iconxiayishou':
      return <Iconxiayishou key="40" {...rest} />;
    case 'iconzantingtingzhi':
      return <Iconzantingtingzhi key="41" {...rest} />;
    case 'iconbofang':
      return <Iconbofang key="42" {...rest} />;
    case 'iconarrow-down':
      return <IconarrowDown key="43" {...rest} />;
    case 'iconshijian':
      return <Iconshijian key="44" {...rest} />;
    case 'iconjia':
      return <Iconjia key="45" {...rest} />;
    case 'iconjian':
      return <Iconjian key="46" {...rest} />;
    case 'iconmeiyoushuju':
      return <Iconmeiyoushuju key="47" {...rest} />;
    case 'iconshengyin':
      return <Iconshengyin key="48" {...rest} />;
    case 'iconicon-test':
      return <IconiconTest key="49" {...rest} />;
    case 'iconshengyin1':
      return <Iconshengyin1 key="50" {...rest} />;
    case 'iconxihuan-':
      return <Iconxihuan key="51" {...rest} />;
    case 'iconxihuantianchong':
      return <Iconxihuantianchong key="52" {...rest} />;
    case 'iconziyuan':
      return <Iconziyuan key="53" {...rest} />;
    case 'icongengduo':
      return <Icongengduo key="54" {...rest} />;
    case 'iconfaxian':
      return <Iconfaxian key="55" {...rest} />;
    case 'iconiconfontxingxing':
      return <Iconiconfontxingxing key="56" {...rest} />;
    case 'iconzhanghao':
      return <Iconzhanghao key="57" {...rest} />;
    case 'iconren':
      return <Iconren key="58" {...rest} />;
    case 'iconshoucang':
      return <Iconshoucang key="59" {...rest} />;
    case 'iconyemian':
      return <Iconyemian key="60" {...rest} />;
    case 'iconyemian1':
      return <Iconyemian1 key="61" {...rest} />;
    case 'iconindex':
      return <Iconindex key="62" {...rest} />;
    case 'iconindex1':
      return <Iconindex1 key="63" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
