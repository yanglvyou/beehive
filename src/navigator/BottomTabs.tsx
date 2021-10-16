import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Home from '@/pages/Home';
import Setting from '@/pages/Setting';

import IconFont from '@/iconfont/index';
import { BottomTabsScreenProps } from './index';

export type BottomTabParamList = {
  Home: undefined;
  Detail: undefined;
  Setting: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

function getHeaderTitle(route: any) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? '首页';
  switch (routeName) {
    case 'Home':
      return '组件';
    case 'Setting':
      return '设置';
    default:
      return '组件';
  }
}
export default class BottomTabs extends React.PureComponent<BottomTabsScreenProps> {
  componentDidMount() {
    this.setOptions();
  }

  componentDidUpdate() {
    this.setOptions();
  }

  setOptions = () => {
    const { navigation, route } = this.props;
    navigation.setOptions({
      headerTransparent: false,
      headerTitle: getHeaderTitle(route),
    });
  };

  render() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#f86442',
          headerShown: false,
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={({ route }) => ({
            tabBarLabel: '组件',
            headerTitle: getHeaderTitle(route),
            tabBarIcon: ({ color, size }) => (
              <IconFont name="iconshezhi1" color={color} size={size} />
            ),
          })}
        />
        <Tab.Screen
          name="Setting"
          component={Setting}
          options={({ route }) => ({
            tabBarLabel: '设置',
            headerTitle: getHeaderTitle(route),
            tabBarIcon: ({ color, size }) => (
              <IconFont name="iconzujian" color={color} size={size} />
            ),
          })}
        />
      </Tab.Navigator>
    );
  }
}
