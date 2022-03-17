import { StyleSheet, View } from 'react-native';
import GlobalStyle from './../utils/global-style.js';

export default function Spacer (props) {
  return (
    <View style={styles.root}>
      <View style={styles.spacer} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  spacer: {
    width: '90%',
    height: GlobalStyle.dynamicSize(0.5),
    backgroundColor: GlobalStyle.colors.color1,
  }
})
