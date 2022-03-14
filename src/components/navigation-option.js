import React, { useState } from 'react';
import { Pressable, Image, StyleSheet, Text, View } from 'react-native';

import Navigator from './navigator.js';

export default function NavigationOption (props) {
  const [title, set_title] = useState(props.title)
  const [icon, set_icon] = useState(props.icon);

  const on_pressed = () => {
    Navigator.navigate(props.screen);
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
        />
      </View>
      <Text style={styles.text}> {title} </Text>

    </Pressable>
  );
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
    fontSize: 10
  },
  icon: {
    height: '100%',
    resizeMode: 'contain'
  }
});
