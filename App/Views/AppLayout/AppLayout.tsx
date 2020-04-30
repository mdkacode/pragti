import React from 'react';
import {Container, AppView, IconImage, RowView, LayoutContainer,AppFooter,TextBox,FooterCircle} from './style';
import {Dimensions} from 'react-native';
import MyCorsoal from "../../Components/Corusal/corusoal";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const shadowOpt = {
  width: windowWidth,
  height: 55,
  color: "#000",
  border: 4,
  radius: 6,
  opacity: 0.1,
  x: 0,
  y: 3,
  style: { marginVertical: 5 }
};


const AppLayout = () => {
  return (
    <>
    <LayoutContainer>
      {/*Header START */}
      <Container>
        <AppView width={windowWidth - 45} height={10} iPosition={'flex-start'}>
          <RowView fontColor="black">Discover Grocery</RowView>
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

 {/*MyCorsoal Start */}  
      <Container>
        <AppView width={windowWidth} height={200}>
          <MyCorsoal />
        </AppView>
      </Container>
   {/*MyCorsoal Start */} 

   {/* Category Viewer Start  */}
   <LayoutContainer>
     <Container>
     <AppView width={windowWidth - 45} height={40} iPosition={'flex-start'}>
          <RowView fontColor="black">Discover Grocery</RowView>
        </AppView>
       </Container>
   </LayoutContainer>
   {/* Category Viewer Start  */}

   {/*Footer Start */}
   
    </LayoutContainer>
      <Container>

        <AppFooter width={windowWidth} height={50} >
          <Container>
            <AppView width={90} marginLeft={5} iPosition={'flex-start'}>
              <IconImage
                source={require('../../assets/images/icons/heart.png')}
                width={30}
                height={30}
              />
            </AppView>
            <AppView width={65}  iPosition={'flex-start'}>
              <IconImage
                source={require('../../assets/images/icons/user.png')}
                width={30}
                height={30}
              />
            </AppView>
            <AppView width={100} iPosition={'flex-end'}>
              <IconImage
                source={require('../../assets/images/icons/home.png')}
                width={30}
                height={30}
              />
            </AppView>
            <AppView width={70} iPosition={'flex-end'}>
              <IconImage
                source={require('../../assets/images/icons/list.png')}
                width={30}
                height={30}
              />
            </AppView>
          </Container>
          <FooterCircle ><RowView fontColor="black" > <IconImage
            source={require('../../assets/images/icons/shop.png')}
            width={40}
            height={40}
            marginLeft={"1"}
          /></RowView></FooterCircle>

        </AppFooter>
      </Container>
       </>
  );
};
export default AppLayout;
