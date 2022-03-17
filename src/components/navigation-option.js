import React, { useState, useEffect } from 'react';
import { Pressable, Image, StyleSheet, Text, View } from 'react-native';

import Navigator from './../utils/navigator.js';
import GlobalStyle from './../utils/global-style.js';

export default function NavigationOption (props) {
  const [title, set_title] = useState(props.title)
  const [icon, set_icon] = useState(props.icon);
  const [color, set_color] = useState(props.color);

  useEffect( () => {
    set_color(props.color);
  }, [props.color])

  const on_pressed = () => {
    Navigator.navigate(props.screen);
    props.onPressed(props.screen);
  }

  return (
    <Pressable
      style={styles.option}
      onPress={on_pressed}
    >
      <View style={styles.icon_container}>
        <Image
          style={styles.icon}
          source={icon}
          style={{...styles.icon, tintColor: color}}
        />
      </View>
      <Text style={{...styles.text, color: color}}> {title} </Text>

    </Pressable>
  );
}

function reset(index = 0, actions) {

}

const styles = StyleSheet.create({
  option: {
    flex: 1,
    padding: 1,
  },
  icon_container: {
    paddingTop: 3,
    flex: 1,
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: GlobalStyle.text1.size
  },
  icon: {
    height: '100%',
    resizeMode: 'contain'
  }
});
