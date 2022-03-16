import 'react-native-gesture-handler';

import React, { useEffect } from 'react';
import { SafeAreaView, Platform, StyleSheet, View, StatusBar } from 'react-native';

import NavigationBar from './src/components/navigation-bar.js';
import Navigator from './src/components/navigator.js';
import GlobalStyle from './src/utils/global-style.js'

export default function App (props) {
  useEffect( () => {
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor(GlobalStyle.colors.color2);
    }
  }, [])

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="auto" barStyle='light-content' />
      <View style={{flex: 1, backgroundColor: '#000000'}}>
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
  },
  safe: {
    flex: 1,
    backgroundColor: GlobalStyle.colors.color2,
  }
});
