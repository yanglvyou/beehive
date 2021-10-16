import React from 'react';
import { View, Text, Button } from 'react-native';
import { RootStackNavigation } from '@/navigator/index';

interface IProps {
  navigation: RootStackNavigation;
}

const Home: React.FC<IProps> = ({ navigation }) => {
  const goToDetail = () => {
    navigation.navigate('Detail');
  };
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="跳转到详情页"
        onPress={() => {
          goToDetail();
        }}
      />
    </View>
  );
};

export default Home;
