import React, {useState, useEffect} from 'react';
import {StyleSheet, ScrollView, View, Text, Image, ImageBackground} from 'react-native';
import GlobalStyle from './../utils/global-style.js';
import Spacer from './../components/spacer.js';
import MangaSlider from './../components/manga-slider.js';

import Icons from './../utils/icons.js';
import Query from './../utils/query.js';

export default function MangaKakalot () {
  const [top_manga, set_top_manga] = useState([]);
  const [top_novels, set_top_novels] = useState([]);
  const [top_doujin, set_top_doujin] = useState([]);
  const [most_popular, set_most_popular] = useState([]);
  const [most_favorite, set_most_favorite] = useState([]);
  const [one_shot, set_one_shot] = useState([]);
  const [top_manhwa, set_top_manhwa] = useState([]);
  const [top_manhua, set_top_manhua] = useState([]);

  async function fetch_data () {
    Query.getTopManga().then( data => {
      set_top_manga(data);
    });
    Query.getTopNovels().then( data => {
      set_top_novels(data);
    });
    await Query.getPopular().then( data => {
      set_most_popular(data);
    });
    Query.getFavorite().then( data => {
      set_most_favorite(data);
    });
    Query.getOneShots().then( data => {
      set_one_shot(data);
    });
    await Query.getManhwa().then( data => {
      set_top_manhwa(data);
    });
    Query.getManhua().then( data => {
      set_top_manhua(data);
    });
    Query.getDoujin().then( data => {
      set_top_doujin(data);
    });
  }

  useEffect( () => {
    fetch_data();
  }, []);

  return(
    <View style={{flex: 1}}>
      <ImageBackground
        style={styles.background}
        source={Icons.background}
      >
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
            <MangaSlider manga={most_popular} title='Most Popular' id='most-popular' />
            <MangaSlider manga={most_favorite} title='Most Favorited' id='most-favorite' />
            <MangaSlider manga={one_shot} title='Top One-Shots' id='top-one-shot' />
            <MangaSlider manga={top_manhwa} title='Top Manhwa' id='top-manhwa' />
            <MangaSlider manga={top_manhua} title='Top Manhua' id='top-manhua' />
            <MangaSlider manga={top_doujin} title='Top Doujin' id='top-doujin' />
          </ScrollView>
        </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    marginTop: GlobalStyle.dynamicSize(40),
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
  background: {
    flex: 1,
    backgroundColor: GlobalStyle.colors.color3,
    resizeMode: 'stretch',
    tintColor: GlobalStyle.colors.color1,
  },
});
