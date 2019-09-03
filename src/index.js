import React from 'react';
import { StatusBar } from 'react-native';


import Routes from './routes';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor= '#317a34' />
      <Routes />
    </>
  );
};

export default App;
