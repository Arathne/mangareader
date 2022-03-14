import Icons from './../utils/icons.js';
import NavigationOption from './navigation-option.js';
import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';

export default function NavigationBar (props) {
  const [current_screen, set_current_screen] = useState('library');

  const get_color =(screen_name) => {
    if (screen_name === current_screen )
      return '#FFFF00'
    else
      return '#00FFFF'
  }

  const screen_update = (new_screen) => {
    if (current_screen != new_screen) {
      set_current_screen(new_screen);
    }
  }

  return (
    <View style={styles.root}>
      <NavigationOption
        title='discover'
        icon={Icons.discover}
        screen='discover'
        color={get_color('discover')}
        onPressed={screen_update}
      />
      <NavigationOption
        title='library'
        icon={Icons.library}
        screen='library'
        color={get_color('library')}
        onPressed={screen_update}
      />
      <NavigationOption
        title='search'
        icon={Icons.search}
        screen='search'
        color={get_color('search')}
        onPressed={screen_update}
      />
      <NavigationOption
        title='random'
        icon={Icons.random}
        screen='random'
        color={get_color('random')}
        onPressed={screen_update}
      />
      <NavigationOption
        title='settings'
        icon={Icons.settings}
        screen='settings'
        color={get_color('settings')}
        onPressed={screen_update}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignContent: 'space-around',
    justifyContent: 'space-around',
    height: 49,
    backgroundColor: '#0000FF'
  }
});
