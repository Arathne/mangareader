import { useState, useEffect } from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

import MyAnimeList from './../utils/api/myanimelist.js';
import GlobalStyle from './../utils/global-style.js';

export default function MangaCover (props, {navigation}) {
  const [data, set_data] = useState(props.data);

  const onPressed = () => {
    props.navigation.navigate('mangaDetails', data);
  }

  useEffect(() => {
    set_data(props.data);
  }, [props.data])

  return (
    <TouchableOpacity
      style={styles.root}
      onPress={onPressed}
      activeOpacity={0.75}
    >
      <Image
        style={styles.image}
        source={{
          uri: data.main_picture.medium,
          method: 'GET',
          headers: {
            'X-MAL-CLIENT-ID': MyAnimeList.clientId,
          }
        }}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  root: {
    width: GlobalStyle.dynamicSize(100),
    height: '100%',
    marginLeft: GlobalStyle.dynamicSize(2),
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
});
