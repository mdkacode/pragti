import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import {LightColor} from '../../Modules/GlobalStyles/GlobalColors';
// Global App Width and Height
const windowWidth = Dimensions.get('window').width;
//  const windowHeight = Dimensions.get('window').height;
export const LayoutContainer = styled.ScrollView`
  flex: 1;
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
`;

export const IconImage = styled.Image`
  width: ${(p: IconImage) => p.width}px;
  height: ${(p: IconImage) => p.height}px;
`;

interface IconImage {
  width?: number;
  height?: number;
}

interface viewProps {
  width?: number;
  height?: number;
  top?: number;
  iPosition?: string;
}
