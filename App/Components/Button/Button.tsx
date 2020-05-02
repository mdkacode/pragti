import React from 'react';
import { TouchableHighlight, View } from 'react-native';
import { Button } from 'react-native-elements';
import { RowView } from '../../Modules/GlobalStyles/GlobalStyle';
import { Darkest, ThemeYellow } from '../../Modules/GlobalStyles/GlobalColors';
import { DeviceWidth } from '../DeviceDeminsions/DeviceDeminsions';

interface ButtonProps {
  content?: string;
  key: string;
  backgroundColor?: string;
  fontColor?: string;
  borderd?: boolean;
  marginLeft?: number;
  btnWidth?: number;
  marginRight?: number;
  action?: (any) => any;
}
/**
 *
 * @param props Define All
 */
const AppButton = (props: ButtonProps) => {
  let {
    btnWidth,
    borderd,
    action,
    fontColor,
    backgroundColor,
    content,
  } = props;
  switch (borderd) {
    case true:
      return (
        <Button
          onPress={action}
          type="outline"
          title={
            <RowView fontize={14} fontColor={fontColor || ThemeYellow}>
              {content}
            </RowView>
          }
          buttonStyle={{
            width: btnWidth ? btnWidth : DeviceWidth / 2 - 10,
            padding: 7,
            margin: 2,
            backgroundColor: backgroundColor || Darkest,
          }}
        />
      );

    default:
      return '';
      break;
  }
};

export default AppButton;
