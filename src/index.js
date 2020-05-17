import React from 'react';
import { StatusBar } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import './config/ReactotronConfig';
import Routes from './routes';

MaterialIcons.loadFont();
FontAwesome.loadFont();

function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
    </>
  );
}

export default App;
