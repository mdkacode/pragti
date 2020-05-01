import styled from 'styled-components/native';
import {Dimensions, ViewProps} from 'react-native';
import {LightColor} from '../../Modules/GlobalStyles/GlobalColors';
// Global App Width and Height
const windowWidth = Dimensions.get('window').width;
//  const windowHeight = Dimensions.get('window').height;
export const LayoutContainer = styled.ScrollView`
  flex: 1;
  background-color:#eeeeee;
  flex-direction: column;
`;

export const TextBox = styled.TextInput`
  width: ${windowWidth - 15}px;
  padding-left: 12px;
  font-size: 19px;
  font-weight: 900;
  font-family: 'OpenSans-Bold';
  /* border-radius: 15px;
  border: 2px solid #eee;
  box-shadow: 0 0 80px #d5d5d5; */
`;
export const RowView = styled.Text`
  padding-left: 12px;
  font-size: 25px;
  font-weight: 900;
  color : ${(p: textProps) => (p.fontColor ? p.fontColor : 'white')};
  font-family: 'OpenSans-Bold';
`;

export const PrimaryButton = styled.Button`
  color: palevioletred;
  font-size: 1px;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export const Container = styled.View`
  flex-direction: row;
`;
export const AppView = styled.View`
  width: ${(p: viewProps) => (p.width ? p.width : 0)}px;
  height: ${(p: viewProps) => (p.height ? p.height : 0)}px;
  margin-top: ${(p: viewProps) => (p.top ? p.top : 0)}px;
  align-items: ${(p: viewProps) => (p.iPosition ? p.iPosition : 'flex-start')};
  margin-top: 15px;
  margin-right:${(p:ViewProps) => ( p.items ?  windowWidth/p.items : 0)}px;
  padding-left:${(p: viewProps) => (p.marginLeft ? p.marginLeft : 0)}px;
`;

export const IconImage = styled.Image`
  width: ${(p: IconImage) => p.width}px;
  height: ${(p: IconImage) => p.height}px;
  margin-left: ${(p: IconImage) => (p.marginLeft ? p.marginLeft : 0) }px;
`;

export const AppFooter = styled.View`
  width: ${(p: viewProps) => (p.width ? p.width : 0)}px;
  height: ${(p: viewProps) => (p.height ? p.height : 0)}px;
  position: absolute;
  background-color:#192E5B;
  color:white;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  bottom: 0;
`;

export const FooterCircle = styled.View`
border-radius: 60px;
width:70px;
bottom:30px;
height:60px;
padding-bottom:70px;
background-color:#eeeeee;
margin-left:40%;
`

// Define Props here 
interface IconImage {
  width?: number;
  height?: number;
  marginLeft?:string;
}
interface textProps{
  fontColor: string;
}

interface viewProps {
  width?: number;
  height?: number;
  marginLeft?:number;
  top?: number;
  items?: number;
  iPosition?: string;
}
