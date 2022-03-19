import React, {useState, useEffect} from 'react';
import {StyleSheet, ScrollView, View, Text, Image, ImageBackground} from 'react-native';

import GlobalStyle from './../utils/global-style.js';
import MangaSlider from './../components/manga-slider.js';
import Icons from './../utils/icons.js';
import Query from './../utils/query.js';

export default function MangaKakalot ({navigation}) {
  const [top_manga, set_top_manga] = useState([]);
  const [top_novels, set_top_novels] = useState([]);
  const [most_popular, set_most_popular] = useState([]);
  const [most_favorite, set_most_favorite] = useState([]);
  const [one_shot, set_one_shot] = useState([]);
  const [top_manhwa, set_top_manhwa] = useState([]);
  const [top_manhua, set_top_manhua] = useState([]);

  async function fetch_data () {
    Query.getTopManga().then( data => {
      set_top_manga(data);
    });
    Query.getPopular().then( data => {
      set_most_popular(data);
    });
    await Query.getFavorite().then( data => {
      set_most_favorite(data);
    });
    Query.getTopNovels().then( data => {
      set_top_novels(data);
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
  }

  useEffect( () => {
    fetch_data();
  }, []);

  return(
    <View style={{flex: 1}}>
      <ScrollView style={styles.scroll}>
        <MangaSlider manga={top_manga} title='Top Manga' id='top-manga' navigation={navigation} />
        <MangaSlider manga={most_popular} title='Most Popular' id='most-popular' navigation={navigation} />
        <MangaSlider manga={most_favorite} title='Most Favorited' id='most-favorite' navigation={navigation} />
        <MangaSlider manga={top_novels} title='Top Novels' id='top-novels' navigation={navigation} />
        <MangaSlider manga={one_shot} title='Top One-Shots' id='top-one-shot' navigation={navigation} />
        <MangaSlider manga={top_manhwa} title='Top Manhwa' id='top-manhwa' navigation={navigation} />
        <MangaSlider manga={top_manhua} title='Top Manhua' id='top-manhua' navigation={navigation} />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  background: {
    flex: 1,
    backgroundColor: GlobalStyle.colors.color3,
    resizeMode: 'stretch',
    tintColor: GlobalStyle.colors.color1,
  },
});
