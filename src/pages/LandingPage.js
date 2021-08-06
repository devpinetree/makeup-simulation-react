import React from 'react';
import { InputText } from 'src/components';
import { WrapperContainer } from '../components/container/ContainerStyle';

function LandingPage(props) {
  const onClick = () => {
    // history push streaming page
  };
  return (
    <WrapperContainer>
      <InputText />
      <button onClick={onClick}>Login</button>
    </WrapperContainer>
  );
}

export default LandingPage;
