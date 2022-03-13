import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import MenuOption from './src/components/menu-option.js';
import Icons from './src/utils/icons.js';
import Discover from './src/pages/discover/discover.js';

const page_info = [
  {
    title: 'discover',
    page: <Discover />,
    icon: Icons.discover
  },
  {
    title: 'library',
    page: <Discover />,
    icon: Icons.library
  },
  {
    title: 'search',
    page: <Discover />,
    icon: Icons.search
  },
  {
    title: 'random',
    page: <Discover />,
    icon: Icons.random
  },
  {
    title: 'settings',
    page: <Discover />,
    icon: Icons.settings
  }
]

export default function App() {
  const [current_page, set_current_page] = useState('discover');

  const page_update = (target_page) => {
    set_current_page(target_page);
  }

  const MenuBar = () => {
    const components = page_info.map( (item) =>
      <MenuOption key={`${item.title}-menubar`}
        title={item.title}
        onPressed={page_update}
        icon={item.icon}
      />
    );

    return (
      <View style={styles.bottom}>
        {components}
      </View>
    );
  }


  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar style="auto" />
      <View style={styles.top}>

      </View>
      <MenuBar />
    </SafeAreaView>
  );
}

/*<View style={styles.bottom}>
  <MenuOption
    title='discover'
    onPressed={page_update}
    icon={Icons.discover}
  />
  <MenuOption
    title='search'
    onPressed={page_update}
    icon={Icons.search}
  />
</View>*/

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#00FF00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  top: {
    flex: 1,
    backgroundColor: '#FF0000'
  },
  bottom: {
    flexDirection: 'row',
    alignContent: 'space-around',
    justifyContent: 'space-around',
    height: 49,
    backgroundColor: '#0000FF'
  },
});
