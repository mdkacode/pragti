import React from 'react';
import {Container, AppView, IconImage, RowView, LayoutContainer} from './style';
import {Dimensions} from 'react-native';
import MyCorsoal from "../../Components/Corusal/corusoal";
const windowWidth = Dimensions.get('window').width;
const AppLayout = () => {
  return (
    <LayoutContainer>
      <Container>
        <AppView width={windowWidth - 45} height={10} iPosition={'flex-start'}>
          <RowView>Discover Grocery</RowView>
        </AppView>
        <AppView iPosition={'flex-end'}>
          <IconImage
            source={require('../../assets/images/icons/search.png')}
            width={24}
            height={24}
          />
        </AppView>
        <AppView width={35} iPosition={'flex-end'}>
          <IconImage
            source={require('../../assets/images/icons/notificationBell.png')}
            width={24}
            height={24}
          />
        </AppView>
      </Container>
      <Container>
        <AppView width={windowWidth} height={200}>
          <MyCorsoal />
        </AppView>
      </Container>
    </LayoutContainer>
  );
};
export default AppLayout;
