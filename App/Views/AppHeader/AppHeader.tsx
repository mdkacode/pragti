
import React from "react";
import { Dimensions } from "react-native";
import { Container,AppView,RowView,IconImage } from "../../Modules/GlobalStyles/GlobalStyle";

const windowWidth = Dimensions.get("window").width;
const AppHeader = () =>  <><Container>
  <AppView width={windowWidth - 45} height={10} iPosition={'flex-start'}>
    <RowView paddingLeft={15} fontColor="black">Discover Grocery</RowView>
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
{/*Header END */}
</>


export default AppHeader;