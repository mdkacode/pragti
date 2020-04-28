import React from 'react';
import {Container, AppView, IconImage, RowView} from './style';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const AppLayout = () => {
  return (
    <Container>
      <AppView width={windowWidth - 45} iPosition={'flex-start'}>
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
  );
};
export default AppLayout;
