import React from 'react';
import { LayoutContainer, Container } from "./style";
import { AppView } from "../../Modules/GlobalStyles/GlobalStyle";
import { Dimensions, StatusBar } from 'react-native';

import MainAppFooter from "../AppFooter/AppFooter";
import MainAppHeader from "../AppHeader/AppHeader";
import Categories from "../../Components/Categories/Categories";
import MyCorsoal from '../../Components/Corusal/corusoal';
const windowWidth = Dimensions.get('window').width;
const AppLayout = () => {

  return (
    <>
      <LayoutContainer>

        <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#eeeeee" translucent={true} />
        <MainAppHeader />
        <AppView width={windowWidth} height={200}>
          <MyCorsoal />
        </AppView>
        <Categories />
      </LayoutContainer>
      {/*Footer START */}
      <MainAppFooter />
      {/*Footer END */}
    </>
  );
};
export default AppLayout;
