import React, {useState, useEffect} from 'react';
import {StyleSheet, ScrollView, View, Text, Image} from 'react-native';
import GlobalStyle from './../utils/global-style.js';
import Spacer from './../components/spacer.js';
import MangaSlider from './../components/manga-slider.js';

import Icons from './../utils/icons.js';
import Query from './../utils/query.js';

export default function MangaKakalot () {
  const [top_manga, set_top_manga] = useState([]);
  const [top_novels, set_top_novels] = useState([]);
  const [doujin, set_doujin] = useState([]);

  useEffect( () => {
    Query.getTopManga().then( data => {
      set_top_manga(data);
    });
    Query.getTopNovels().then( data => {
      set_top_novels(data);
    });
    Query.getDoujin().then( data => {
      set_doujin(data);
    });
  }, []);

  return(
    <View style={{flex: 1}}>
      <View style={styles.logo_background}>
        <View style={{flex: 1, padding: 6}}>
          <Image
            style={styles.logo}
            source={Icons.logo}
          />
        </View>
      </View>
      <ScrollView style={styles.scroll}>
        <MangaSlider manga={top_manga} title='Top Manga' id='top-manga' />
        <MangaSlider manga={top_novels} title='Top Novels' id='top-novels' />
        <MangaSlider manga={doujin} title='Top Doujin' id='top-doujin' />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    marginTop: GlobalStyle.dynamicSize(40),
    backgroundColor: GlobalStyle.colors.color3,
  },
  image: {
    height: 200,
    width: '100%',
  },
  logo: {
    height: '100%',
    resizeMode: 'contain',
    tintColor: GlobalStyle.colors.color4,
  },
  logo_background: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: GlobalStyle.dynamicSize(40),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: GlobalStyle.colors.color2,
  },
});
