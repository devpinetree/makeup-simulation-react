import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import { LandingPage, StreamingPage, GalleryPage } from 'src/pages';
import { Menubar } from 'src/components';
import colors from '../styles/colors';

const MainContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  height: 100vh;
  backgroundcolor: ${colors.GreyishWhite};
  color: ${colors.brownishGrey};
`;

const PageContainer = styled.div`
  width: 100%;
  position: fixed;
  top: 67px;
  bottom: 0;
  overflow-y: scroll;
  overflow-x: scroll;
`;

function RoutingPage(props) {
  return (
    <MainContainer>
      <Menubar />
      <PageContainer>
        <Route exact path="/landing" component={LandingPage} />
        <Route exact path="/streaming" component={StreamingPage} />
        <Route exact path="/gallery" component={GalleryPage} />
      </PageContainer>
    </MainContainer>
  );
}

export default RoutingPage;
