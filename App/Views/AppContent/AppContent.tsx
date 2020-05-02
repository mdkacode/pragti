import React, { useContext, Suspense, useState, useEffect } from 'react';
import { Dimensions, StatusBar, ScrollView, Image, View } from 'react-native';
const Categories = React.lazy(() =>
    import('../../Components/Categories/Categories'),
  ),
  MyCorsoal = React.lazy(() => import('../../Components/Corusal/corusoal')),
  SingleProduct = React.lazy(() =>
    import('../../Components/SingleProduct/SingleProduct'),
  ),
  MainAppFooter = React.lazy(() => import('../AppFooter/AppFooter'));
const { width, height } = Dimensions.get('window');
import {
  LayoutContainer,
  RowView,
  AppView,
} from '../../Modules/GlobalStyles/GlobalStyle';
import { ApplicationContext } from '../../Modules/context';

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

const productDescription = [
  {
    title: 'Pepsi',
    subtitle: 'Pepsi',
    illustration:
      'https://cdn.pixabay.com/photo/2016/03/05/19/02/vegetables-1238252_1280.jpg',
  },
  {
    title: 'Pepsi',
    subtitle: 'Pepsi',
    illustration:
      'https://cdn.pixabay.com/photo/2017/06/02/18/24/fruit-2367029_1280.jpg',
  },
  {
    title: 'Pepsi',
    subtitle: 'Pepsi',
    illustration:
      'https://cdn.pixabay.com/photo/2016/06/29/19/54/healthy-food-1487647_1280.jpg',
  },
  {
    title: 'Pepsi',
    subtitle: 'Pepsi',
    illustration:
      'https://cdn.pixabay.com/photo/2017/06/06/22/37/italian-cuisine-2378729_1280.jpg',
  },
  {
    title: 'Pepsi',
    subtitle: 'Pepsi',
    illustration:
      'https://cdn.pixabay.com/photo/2017/06/02/18/24/fruit-2367029_1280.jpg',
  },
];

const list = [
  {
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President',
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
  },
];

const AppContent = ({ navigation }) => {
  const [coutn, setCount] = useState(0);
  const getData = useContext(ApplicationContext);
  useEffect(() => {
    console.log('GETT');
  });
  const getProduct = (e: any) => {
    console.log(e);
    navigation.navigate('ProductDetail', {
      name: e.name,
    });
  };
  const addValue = () => {
    setCount(coutn + 1);
    getData.rating = coutn;
    console.log(getData.rating);
  };
  return (
    <>
      {/* Item Listing Start */}

      {/* Item Listing END */}

      <LayoutContainer
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        marginTop={1}>
        <Suspense fallback={<RowView fontize={20}>Loading</RowView>}>
          <AppView width={width} height={200} marginHeight={10}>
            <MyCorsoal content={productDescription} height={2} />
          </AppView>
        </Suspense>

        <Suspense fallback={<RowView fontize={20}>Loading</RowView>}>
          <Categories />
        </Suspense>

        <LayoutContainer marginTop={1}>
          <RowView paddingLeft={10} fontize={18} fontColor="black">
            Popular Products
          </RowView>
          <ScrollView
            horizontal={true}
            style={{ flex: 1, height: 130, marginTop: 10 }}
            showsHorizontalScrollIndicator={false}>
            <Suspense fallback={<RowView fontize={20}>Loading</RowView>}>
              {product.map((e) => (
                <SingleProduct List={e} action={getProduct} />
              ))}
            </Suspense>
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
            <Suspense fallback={<RowView fontize={20}>Loading</RowView>}>
              {product.map((e) => (
                <SingleProduct List={e} action={getProduct} />
              ))}
            </Suspense>
          </ScrollView>
        </LayoutContainer>
      </LayoutContainer>
      <MainAppFooter navigation={navigation} />
    </>
  );
};

export default AppContent;
