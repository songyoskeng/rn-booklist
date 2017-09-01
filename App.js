import React from 'react';
import { StyleSheet, Text, View, ListView} from 'react-native';
import { Router, Scene, Stack } from 'react-native-router-flux';
import Home from './components/Home'
import Book from './components/Book'

import PageOne from './pageOne';
import PageTwo from './pageTwo';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="home" component={Home} title="NY Times" initial={true} />
          <Scene key="book" component={Book}/>
        </Stack>
      </Router>
     
    );
  }
}

