import React from 'react';
import { Dimensions, StatusBar, ScrollView } from 'react-native';
import Categories from '../../Components/Categories/Categories';
import MyCorsoal from '../../Components/Corusal/corusoal';
import SingleProduct from '../../Components/SingleProduct/SingleProduct';
const { width, height } = Dimensions.get('window');
import {
  LayoutContainer,
  RowView,
  AppView,
} from '../../Modules/GlobalStyles/GlobalStyle';

const product = [
  {
    name: 'Lays Chips',
    image:
      'https://www.lays.ca/sites/lays.ca/files/30015469_Lay%27s_Roast%20Chicken_235g.png',
    price: '20',
    sellPrice: '10',
  },
  {
    name: 'Amala Juice',
    image:
      'https://www.patanjaliayurved.net/assets/product_images/400x500/amlajuice500ml400500.png',
    price: '40',
    sellPrice: '30',
  },
  {
    name: 'Potato',
    image:
      'https://www.ilpomodoropetti.com/wp-content/uploads/2017/01/pomo_petti_100_3.png',
    price: '120',
    sellPrice: '110',
  },
  {
    name: 'Potato',
    image:
      'https://3.imimg.com/data3/HF/NT/MY-11459200/chilled-potatoes-500x500.png',
    price: '80',
    sellPrice: '55',
  },
  {
    name: '5 Start',
    image: 'https://choosefresh.in/image/cache/data/chocolates/3-500x500.png',
    price: '70',
    sellPrice: '60',
  },
];

const AppContent = () => {
  return (
    <LayoutContainer
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      marginTop={1}>
      <AppView width={width} height={200} marginHeight={10}>
        <MyCorsoal />
      </AppView>
      <Categories />

      {/* Popular Product START */}
      <LayoutContainer marginTop={1}>
        <RowView paddingLeft={10} fontize={18} fontColor="black">
          Popular Products
        </RowView>
        <ScrollView
          horizontal={true}
          style={{ flex: 1, height: 130, marginTop: 10 }}
          showsHorizontalScrollIndicator={false}>
          {product.map((e) => (
            <SingleProduct List={e} />
          ))}
        </ScrollView>
      </LayoutContainer>

      <LayoutContainer>
        <RowView paddingLeft={10} fontize={18} fontColor="black">
          New Products
        </RowView>
        <ScrollView
          horizontal={true}
          style={{ flex: 1, height: 220, marginTop: 5 }}
          showsHorizontalScrollIndicator={false}>
          {product.map((e) => (
            <SingleProduct List={e} />
          ))}
        </ScrollView>
      </LayoutContainer>
      {/* Popular Product END */}
    </LayoutContainer>
  );
};

export default AppContent;
