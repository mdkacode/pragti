import 'react-native-gesture-handler';
import React, { Suspense, useContext } from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ApplicationContext } from '../../Modules/context';
import MainAppFooter from '../AppFooter/AppFooter';
const AppHeader = React.lazy(() => import('../AppHeader/AppHeader'));
const AppContent = React.lazy(() => import('../AppContent/AppContent'));
const AppCart = React.lazy(() => import('../AppCart/AppCart'));
const ProductDetails = React.lazy(() =>
  import('../ProductDetail/ProductDetail'),
);

const Stack = createStackNavigator();

const AppLayout = () => {
  const getData = useContext(ApplicationContext);
  return (
    <Suspense fallback={<Text>Loading</Text>}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#eeeeee',
            },
          }}>
          <Stack.Screen
            name="Home"
            component={AppContent}
            options={{
              headerTitle: (props) => <AppHeader titleName={`Home`} />,
            }}
          />
          <Stack.Screen
            name="Cart"
            component={AppCart}
            options={{
              headerTitle: (props) => <AppHeader titleName={`Cart`} />,
            }}
          />
          <Stack.Screen
            name="ProductDetail"
            component={ProductDetails}
            options={({ route }) => ({
              headerTitle: <Text>Product</Text>,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
      {/* {<MainAppFooter />} */}
    </Suspense>
  );
};

export default AppLayout;
