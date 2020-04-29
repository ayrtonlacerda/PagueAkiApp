import React from 'react';
import { StatusBar } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import './config/ReactotronConfig';
import Routes from './routes';

MaterialIcons.loadFont();

function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Routes />
    </>
  );
}

export default App;
