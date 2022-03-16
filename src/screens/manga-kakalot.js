import React, {useEffect} from 'react';
import {StyleSheet, ScrollView, View, Text, Image} from 'react-native';
import GlobalStyle from './../utils/global-style.js';

import Parser from './../utils/parsers/manga-kakalot.js';

export default function MangaKakalot () {
  useEffect( () => {
    Parser.latestReleases();
  }, []);

  return(
    <ScrollView style={styles.root}>
      <Text> Latest Releases </Text>
      <Image
        style={styles.image}
        source={{
          uri: 'https://c-1.mreadercdn.ru/_v2/1/0dcb8f9eaacfd940603bd75c7c152919c72e45517dcfb1087df215e3be94206cfdf45f64815888ea0749af4c0ae5636fabea0abab8c2e938ab3ad7367e9bfa52/08/f9/08f938de6f8c22286f6c084e82bf323b/08f938de6f8c22286f6c084e82bf323b.jpg?t=3ed3762c03faa2bc062cb64c9a020199&ttl=1647427843',
        }}
      />
    </ScrollView>
  )
}

/*<Image
  style={styles.tinyLogo}
  source={{
    uri: 'https://s8.mkklcdnv6temp.com/mangakakalot/q1/qf926932/chapter_108_episode_108/1.jpg',
    method: 'GET',
    headers: {
      Referer: "https://mangakakalot.com/"
    }
  }}
/>*/

const styles = StyleSheet.create({
  root: {
    flex: 1,
    //backgroundColor: GlobalStyle.colors.background
  },
  image: {
    backgroundColor: 'blue',
    height: 200,
    width: '100%'
  }
});
