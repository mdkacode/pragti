import React from 'react';
import {Secondary, Darkest} from '../../Modules/GlobalStyles/GlobalColors';
import styled from 'styled-components/native';

const Card = (props: CardInterface) => (
  <Container>
    <Cover>
      <Image
        source={{
          uri: props.image,
        }}
      />
    </Cover>
    <Content>
      <Title>{props.title}</Title>
      <Occupation>{props.occupation}</Occupation>
    </Content>
  </Container>
);

export default Card;

const Container = styled.View`
  background: #fff;
  height: 200px;
  width: 150px;
  border-radius: 14px;
  margin: 18px;
  margin-top: 20px;
  border: 2px solid rgba(0, 0, 0, 0.15);
`;

const Cover = styled.View`
  width: 100%;
  height: 120px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

const Content = styled.View`
  padding-top: 10px;
  flex-direction: column;
  align-items: center;
  height: 60px;
`;

const Title = styled.Text`
  color: ${Darkest};
  font-size: 15px;
  font-weight: 900;
`;

const Occupation = styled.Text`
  color: ${Secondary};
  font-size: 15px;
  font-weight: 600;
  margin-top: 4px;
`;

interface CardInterface {
  title: string;
  occupation: string;
  image: string;
  refLink: string;
}
