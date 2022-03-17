import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { StackActions, NavigationActions } from 'react-navigation';

import Discover from './../screens/discover.js';
import Library from './../screens/library.js';
import Search from './../screens/search.js';
import Random from './../screens/random.js';
import Settings from './../screens/settings.js';

/* creating navigation container
*/
const root_nav_options = {
  headerShown: false,
  animationEnabled: false
}

const screens = {
  discover: {
    screen: Discover,
    navigationOptions: root_nav_options
  },
  library: {
    screen: Library,
    navigationOptions: root_nav_options
  },
  search: {
    screen: Search,
    navigationOptions: root_nav_options
  },
  random: {
    screen: Random,
    navigationOptions: root_nav_options
  },
  settings: {
    screen: Settings,
    navigationOptions: root_nav_options
  }
}

const stack = createStackNavigator( screens );
const container = createAppContainer( stack )


/* navigation outside of screens
*/
let navigator_ref = null;

function setTopLevelNavigator (ref) {
  navigator_ref = ref;
}

function navigate (routeName, params) {
  navigator_ref.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}

function reset (screen_name) {
  navigator_ref.dispatch(
    StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: screen_name })],
    })
  );
}

module.exports = {
  container: container,
  setTopLevelNavigator: setTopLevelNavigator,
  navigate: navigate,
  reset: reset
}