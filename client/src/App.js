import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { StateProvider, initialState } from './state';
import { rootReducer } from './reducers';

import 'antd/dist/antd.css';
import { Layout } from 'antd';

import { ProjectList, AppHeader } from './components';

function App() {
  return (
    <StateProvider initialState={initialState} reducer={rootReducer}>
      <Layout className='App'>
        <AppHeader />
        <Switch>
          <Route exact path='/' component={ProjectList} />
        </Switch>
      </Layout>
    </StateProvider>
  );
}

export default App;
