import Icons from './../utils/icons.js';
import NavigationOption from './navigation-option.js';
import { StyleSheet, View } from 'react-native';

export default function NavigationBar (props) {
  return (
    <View style={styles.root}>
      <NavigationOption
        title='discover'
        icon={Icons.discover}
        screen='discover'
      />
      <NavigationOption
        title='library'
        icon={Icons.library}
        screen='library'
      />
      <NavigationOption
        title='search'
        icon={Icons.search}
        screen='search'
      />
      <NavigationOption
        title='random'
        icon={Icons.random}
        screen='random'
      />
      <NavigationOption
        title='settings'
        icon={Icons.settings}
        screen='settings'
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
