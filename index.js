/** @format */

// import { AppRegistry } from 'react-native';
// import App from './App';
// import { name as appName } from './app.json';

// AppRegistry.registerComponent(appName, () => App);

// Import a library to help create a component
import React from 'react';
import { AppRegistry, Text } from 'react-native';

//Create a component
const App = () => (
    <Text>Some Text</Text>
);

//Render it to the device
AppRegistry.registerComponent('albums', () => App);
