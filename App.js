import 'react-native-gesture-handler';

import React, { useState, useRef, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import NavigationBar from './src/components/navigation-bar.js';
import Navigator from './src/components/navigator.js';

export default function App (props) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar style="auto" />
      <View style={{flex: 1, backgroundColor: '#FF0000'}}>
        <Navigator.container
          ref={ ref => Navigator.setTopLevelNavigator(ref) }
        />
      </View>
      <NavigationBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#00FF00',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
