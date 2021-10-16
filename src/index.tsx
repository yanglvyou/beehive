import React from 'react';
import { StatusBar, View, Text, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Navigator from './navigator/index';

const Index: React.FC<{}> = () => {
  return (
    <SafeAreaProvider>
      <StatusBar
        animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden
        backgroundColor="transparent" //状态栏的背景色
        translucent //指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。
        barStyle="dark-content" // enum('default', 'light-content', 'dark-content')
      />
      <Navigator />
    </SafeAreaProvider>
  );
};
export default Index;
