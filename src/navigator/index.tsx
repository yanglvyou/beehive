import React from 'react';
import { Platform, StyleSheet, StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  CardStyleInterpolators,
  createStackNavigator,
  HeaderStyleInterpolators,
  StackNavigationProp,
} from '@react-navigation/stack';
import BottomTabs from './BottomTabs';
import Detail from '@/pages/Detail/index';
import IconFont from '@/iconfont/index';
import HotPushModal from '@/components/codePush/HotPushModal';

export type RootStackParamList = {
  BottomTabs: undefined;
  Detail: undefined;
};

export type RootStackNavigation = StackNavigationProp<RootStackParamList>;

export type DetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Detail'
>;
export type BottomTabsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'BottomTabs'
>;

const RootStack = createStackNavigator<RootStackParamList>();

class Navigator extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <NavigationContainer>
        <HotPushModal />
        <RootStack.Navigator
          screenOptions={{
            headerMode: 'float',
            headerTitleAlign: 'center',
            ...Platform.select({
              android: {
                headerStatusBarHeight: StatusBar.currentHeight, //设置状态栏高度
              },
            }),
            headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            gestureEnabled: true,
            headerTintColor: '#333',
            gestureDirection: 'horizontal',
            headerStyle: {
              ...Platform.select({
                android: {
                  elevation: 0,
                  borderBottomWidth: StyleSheet.hairlineWidth,
                },
              }),
            },
          }}>
          <RootStack.Screen
            name="BottomTabs"
            options={{ headerTitle: '首页' }}
            component={BottomTabs}
          />
          <RootStack.Screen
            name="Detail"
            options={{
              headerTitle: '详情页',
              headerBackTitleVisible: false,
              headerBackImage: ({ tintColor }) => (
                <IconFont
                  name="iconzuo"
                  size={22}
                  color={tintColor}
                  style={style.backImage}
                />
              ),
            }}
            component={Detail}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    );
  }
}

const style = StyleSheet.create({
  headerBackground: {
    flex: 1,
    backgroundColor: '#fff',
    opacity: 0,
  },
  backImage: {
    marginHorizontal: Platform.OS === 'android' ? 0 : 8,
  },
});

export default Navigator;
