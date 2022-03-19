import { View, Image, StyleSheet } from 'react-native';
import Icons from './../utils/icons.js';
import GlobalStyle from './../utils/global-style.js';

export default function TitleBar (props) {
  return (
    <View style={styles.root}>
      <View style={styles.background}>
        <Image
          style={styles.logo}
          source={Icons.logo}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: '100%',
    resizeMode: 'contain',
    tintColor: GlobalStyle.colors.color4,
  },
  root: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: GlobalStyle.dynamicSize(40),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: GlobalStyle.colors.color2,
  },
  background: {
    flex: 1,
    padding: 6,
  }
});
