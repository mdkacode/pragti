import React from 'react';
import { Container, AppView, IconImage, RowView } from '../../Modules/GlobalStyles/GlobalStyle';
import {  LayoutContainer } from "./style";
import { Dimensions,ScrollView,Text,View } from 'react-native';
import {  AppFooter,FooterCircle } from "../AppFooter/AppFooter.interface";
import MainAppFooter from "../AppFooter/AppFooter";

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

        {/*MyCorsoal Start */}
        <Container>
          <AppView width={windowWidth} height={200}>
            <MyCorsoal />
          </AppView>
        </Container>
        {/*MyCorsoal Start */}

        {/* Category Viewer Start  */}
        <LayoutContainer>
        <RowView paddingLeft={10} fontize={18} fontColor="black">Pick From Category</RowView>
          <ScrollView horizontal={true} style={{flex:1,height:windowHeight/8}} showsHorizontalScrollIndicator={false} >
         
              <FooterCircle height={500}  width={windowWidth/6} >
              <View style={{flex: 1, flexDirection: 'column'}}>
            <IconImage
                  source={require('../../assets/images/thumbnils/fruit.png')}
                  width={30}
                  height={30}
                  margin={12}
                />
                 <RowView paddingLeft={15} fontize={12} fontColor="black">Fruits</RowView>
              </View>
              </FooterCircle>
              <FooterCircle height={500}  width={windowWidth/6} >
              <View style={{flex: 1, flexDirection: 'column'}}>
            <IconImage
                  source={require('../../assets/images/thumbnils/daal.png')}
                  width={30}
                  height={30}
                  margin={12}
                />
                 <RowView paddingLeft={15} fontize={12} fontColor="black">Aata</RowView>
              </View>
              </FooterCircle>
              <FooterCircle height={500}  width={windowWidth/6} >
              <View style={{flex: 1, flexDirection: 'column'}}>
            <IconImage
                  source={require('../../assets/images/thumbnils/food.png')}
                  width={30}
                  height={30}
                  margin={12}
                />
                 <RowView paddingLeft={1} fontize={12} fontColor="black">Vegitables</RowView>
              </View>
              </FooterCircle>
              <FooterCircle height={500}  width={windowWidth/6} >
              <View style={{flex: 1, flexDirection: 'column'}}>
            <IconImage
                  source={require('../../assets/images/thumbnils/soap.png')}
                  width={30}
                  height={30}
                  margin={12}
                />
                 <RowView paddingLeft={15} fontize={12} fontColor="black">Soap</RowView>
              </View>
              </FooterCircle>
              <FooterCircle height={500}  width={windowWidth/6} >
              <View style={{flex: 1, flexDirection: 'column'}}>
            <IconImage
                  source={require('../../assets/images/thumbnils/noodles.png')}
                  width={30}
                  height={30}
                  margin={12}
                />
                 <RowView paddingLeft={1} fontize={12} fontColor="black">Noodles</RowView>
              </View>
              </FooterCircle>
              <FooterCircle height={500}  width={windowWidth/6} >
              <View style={{flex: 1, flexDirection: 'column'}}>
            <IconImage
                  source={require('../../assets/images/thumbnils/all.png')}
                  width={30}
                  height={30}
                  margin={12}
                />
                 <RowView paddingLeft={15} fontize={12} fontColor="black">All</RowView>
              </View>
              </FooterCircle> 
              
            
          </ScrollView>
        </LayoutContainer>
        {/* Category Viewer Start  */}

        {/*Footer Start */}

      </LayoutContainer>

        <MainAppFooter/>
    </>
  );
};
export default AppLayout;
