import React from 'react';
import {Container, Title} from './styles';
import {ITest} from './types';

const Test = ({title}: ITest) => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
};

export default Test;
