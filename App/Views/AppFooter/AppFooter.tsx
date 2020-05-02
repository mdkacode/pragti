import React from 'react';
import { AppFooter, FooterCircle } from './AppFooter.interface';
import { Dimensions, ScrollView, Text, View } from 'react-native';
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements';
import {
  Container,
  AppView,
  IconImage,
} from '../../Modules/GlobalStyles/GlobalStyle';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const MainAppFooter = ({ navigation }) => {
  const move = () => {
    console.log('GG');
    navigation.navigate('Cart');
  };

  return (
    <AppFooter width={windowWidth} height={50}>
      <Container>
        <AppView marginLeft={10} items={5}>
          <IconImage
            source={require('../../assets/images/icons/home.png')}
            width={30}
            height={30}
          />
        </AppView>
        <AppView items={5}>
          <IconImage
            source={require('../../assets/images/icons/heart.png')}
            width={30}
            height={30}
          />
        </AppView>
        <TouchableOpacity onPress={() => move()}>
          <AppView items={5}>
            <IconImage
              source={require('../../assets/images/icons/cart.png')}
              width={30}
              height={30}
            />

            <Badge
              status="error"
              containerStyle={{ position: 'absolute', top: -4, right: -4 }}
              value={4}
            />
          </AppView>
        </TouchableOpacity>
        <AppView items={5}>
          <IconImage
            source={require('../../assets/images/icons/list.png')}
            width={30}
            height={30}
          />
        </AppView>
        <AppView items={5}>
          <IconImage
            source={require('../../assets/images/icons/user.png')}
            width={30}
            height={30}
          />
        </AppView>
      </Container>
      {/* <FooterCircle ><RowView fontColor="black" > <IconImage
      source={require('../../assets/images/icons/shop.png')}
      width={40}
      height={40}
      marginLeft={"1"}
    /></RowView></FooterCircle> */}
    </AppFooter>
  );
};

export default MainAppFooter;
