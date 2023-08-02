/**
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import { AnErrorOccurred } from '@strapi/helper-plugin';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import pluginId from '../../pluginId';
import HomePage from '../HomePage';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact component={HomePage} path={`/plugins/${pluginId}`} />
        <Route component={AnErrorOccurred} />
      </Switch>
    </div>
  );
};

export default App;
