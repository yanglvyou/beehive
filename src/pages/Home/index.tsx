import React from 'react';
import { View, Text, Button } from 'react-native';
import { RootStackNavigation } from '@/navigator/index';
import Config from 'react-native-config';

interface IProps {
  navigation: RootStackNavigation;
}

const Home: React.FC<IProps> = ({ navigation }) => {
  // const goToDetail = () => {
  //   navigation.navigate('Detail');
  // };
  return (
    <View>
      <Text>URL:{Config.API_URL}</Text>
    </View>
  );
};

export default Home;
