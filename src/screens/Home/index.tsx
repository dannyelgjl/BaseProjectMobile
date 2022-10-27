import React from 'react';
import HomeIcon from '../../assets/icons/home.svg';
import THEME from '../../theme/theme';
import {Container} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <HomeIcon width={40} height={40} color={THEME.NEUTRAL.BLACK} />
    </Container>
  );
};

export default Home;
