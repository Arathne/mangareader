import React, {useState, useEffect} from 'react';
import {StyleSheet, ScrollView, View, Text, Image} from 'react-native';
import GlobalStyle from './../utils/global-style.js';
import Spacer from './../components/spacer.js';
import MangaSlider from './../components/manga-slider.js';

import Icons from './../utils/icons.js';
import Parser from './../utils/parsers/manga-kakalot.js';

export default function MangaKakalot () {
  const [recently_updated, set_recently_updated] = useState([]);
  const [new_releases, set_new_releases] = useState([]);
  const [completed, set_completed] = useState([]);
  const [most_popular, set_most_popular] = useState([]);

  useEffect( () => {
    Parser.recentlyUpdated().then((data) => {
      set_recently_updated(data);
    });
    Parser.newReleases().then((data) => {
      set_new_releases(data);
    });
    Parser.completed().then((data) => {
      set_completed(data);
    });
    Parser.mostPopular().then((data) => {
      set_most_popular(data);
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
        <Text style={styles.h1}> Recently Updated </Text>
        <MangaSlider
          manga={recently_updated}
          id='recent'
        />
        <Spacer />
        <Text style={styles.h1}> New Releases </Text>
        <MangaSlider
          manga={new_releases}
          id='new'
        />
        <Spacer />
        <Text style={styles.h1}> Completed </Text>
        <MangaSlider
          manga={completed}
          id='completed'
        />
        <Spacer />
        <Text style={styles.h1}> Most Popular </Text>
        <MangaSlider
          manga={completed}
          id='popular'
        />
        <Spacer />
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
  h1: {
    color: GlobalStyle.colors.color4,
    fontSize: GlobalStyle.dynamicSize(18),
    padding: GlobalStyle.dynamicSize(4),
  }
});
