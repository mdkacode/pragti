import React from 'react';
import { LayoutContainer } from '../../Modules/GlobalStyles/GlobalStyle';
import ListProduct from '../../Components/ListProduct/ListProduct';

const AppCart = () => {
  return (
    <LayoutContainer
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      marginTop={1}>
      {[1, 2, 3, 4, 5].map((e) => (
        <ListProduct />
      ))}
    </LayoutContainer>
  );
};

export default AppCart;
