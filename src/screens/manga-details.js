import { useState, useEffect } from 'react';
import { Pressable, ScrollView, View, Image, ImageBackground, StyleSheet, Text } from 'react-native';

import Icons from './../utils/icons.js';
import GlobalStyle from './../utils/global-style.js';
import TitleBar from './../components/title-bar.js';
import MyAnimeList from './../utils/api/myanimelist.js';

export default function MangaDetails ({navigation}) {
  const [data, set_data] = useState(navigation.state.params);
  const [show_description, set_show_description] = useState(false);

  useEffect( () => {
    set_data(navigation.state.params);
  }, [navigation] );

  const get_genres = () => {
    const genres = data.genres;
    let str = '';
    for (let obj of genres) {
      str += ` ${obj.name}`
    }

    if (str != '') {
      return (
        <Text style={styles.text} ellipsizeMode='tail'> {`genres: ${str}`} </Text>
      );
    }
  }

  const Display = () => {
    return (
      <View>
        <View style={styles.root}>
          <View style={styles.image_background}>
            <Image
              style={styles.image}
              source={{
                uri: data ? data.main_picture.medium : '',
                method: 'GET',
                headers: {
                  'X-MAL-CLIENT-ID': MyAnimeList.clientId,
                }
              }}
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.text_header}> {data.title} </Text>
            <View style={styles.info_background}>
              <Text style={styles.text}> {`rank: #${data.rank}`} </Text>
              <Text style={styles.text}> {`rating: ${data.mean}/10`} </Text>
              <Text style={styles.text}> {`status: ${data.status.replace('_', ' ')}`} </Text>
              <Text style={styles.text}> {`popularity: #${data.popularity}`} </Text>
              <Text style={styles.text}> {`start date: ${data.start_date}`} </Text>
              { data.end_date && <Text style={styles.text}> {`end date: ${data.end_date}`} </Text>}
            </View>
          </View>
        </View>
        <View style={styles.root}>
          <Text style={styles.text} numberOfLines={4}> {`${data.synopsis}`} </Text>
        </View>
      </View>
    );
  }

  const CheckDataValid = () => {
    if (data != null) {
      return (<Display />)
    }
    else {
      return (<View />)
    }
  }

  return (
    <ImageBackground
      style={styles.background}
      source={Icons.background}
    >
      <ScrollView>
        <CheckDataValid />
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  root: {
    marginTop: GlobalStyle.dynamicSize(6),
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flexDirection: 'row',
    padding: GlobalStyle.dynamicSize(5),
    paddingTop: GlobalStyle.dynamicSize(3),

  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  image_background: {
    width: GlobalStyle.dynamicSize(150),
    height: GlobalStyle.dynamicSize(225),
  },
  info_background: {
    padding: 10,
    paddingTop: 7,
    paddingBottom: 2,
  },
  background: {
    flex: 1,
    backgroundColor: GlobalStyle.colors.color3,
    resizeMode: 'stretch',
    tintColor: GlobalStyle.colors.color1,
  },
  text_header: {
    textAlign: 'center',
    color: GlobalStyle.colors.color4,
    fontSize: GlobalStyle.dynamicSize(19),
  },
  text: {
    marginTop: 3,
    color: GlobalStyle.colors.color4,
    fontSize: GlobalStyle.dynamicSize(14),
  }
});
