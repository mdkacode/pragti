import React from 'react';
import { ScrollView, View, Dimensions } from 'react-native';
import {
  IconImage,
  RowView,
  CircleArea,
  LayoutContainer,
} from '../../Modules/GlobalStyles/GlobalStyle';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Categories = () => {
  return (
    <LayoutContainer marginTop={1}>
      <RowView paddingLeft={10} fontize={18} fontColor="black">
        Pick From Category
      </RowView>
      <ScrollView
        horizontal={true}
        style={{ flex: 1, height: windowHeight / 8 }}
        showsHorizontalScrollIndicator={false}>
        <CircleArea height={500} width={windowWidth / 6}>
          <View style={{ flex: 1, flexDirection: 'column' }}>
            <IconImage
              source={require('../../assets/images/thumbnils/fruit.png')}
              width={30}
              height={30}
              margin={12}
            />
            <RowView paddingLeft={5} fontize={12} fontColor="black">
              Fruits
            </RowView>
          </View>
        </CircleArea>
        <CircleArea height={500} width={windowWidth / 6}>
          <View style={{ flex: 1, flexDirection: 'column' }}>
            <IconImage
              source={require('../../assets/images/thumbnils/daal.png')}
              width={30}
              height={30}
              margin={12}
            />
            <RowView paddingLeft={5} fontize={12} fontColor="black">
              Aata
            </RowView>
          </View>
        </CircleArea>
        <CircleArea height={500} width={windowWidth / 6}>
          <View style={{ flex: 1, flexDirection: 'column' }}>
            <IconImage
              source={require('../../assets/images/thumbnils/food.png')}
              width={30}
              height={30}
              margin={12}
            />
            <RowView paddingLeft={1} fontize={12} fontColor="black">
              Vegitable
            </RowView>
          </View>
        </CircleArea>
        <CircleArea height={500} width={windowWidth / 6}>
          <View style={{ flex: 1, flexDirection: 'column' }}>
            <IconImage
              source={require('../../assets/images/thumbnils/soap.png')}
              width={30}
              height={30}
              margin={12}
            />
            <RowView paddingLeft={1} fontize={12} fontColor="black">
              Soaps
            </RowView>
          </View>
        </CircleArea>
        <CircleArea height={500} width={windowWidth / 6}>
          <View style={{ flex: 1, flexDirection: 'column' }}>
            <IconImage
              source={require('../../assets/images/thumbnils/noodles.png')}
              width={30}
              height={30}
              margin={12}
            />
            <RowView paddingLeft={1} fontize={12} fontColor="black">
              Noodles
            </RowView>
          </View>
        </CircleArea>
        <CircleArea height={500} width={windowWidth / 6}>
          <View style={{ flex: 1, flexDirection: 'column' }}>
            <IconImage
              source={require('../../assets/images/thumbnils/all.png')}
              width={30}
              height={30}
              margin={12}
            />
            <RowView paddingLeft={12} fontize={12} fontColor="black">
              All
            </RowView>
          </View>
        </CircleArea>
      </ScrollView>
    </LayoutContainer>
  );
};

export default Categories;
