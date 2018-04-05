import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import WidgetsContainer from '../components/WidgetsContainer';

const AppLayout = () => (
  <BrowserRouter>
    <Route exact path="/" component={WidgetsContainer} />
  </BrowserRouter>
);

export default AppLayout;
