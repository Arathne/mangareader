import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';

import GlobalStyle from './../utils/global-style.js';
import MangaCover from './../components/manga-cover.js';

export default function MangaSlider (props, {navigation}) {
  const [manga_list, set_manga_list] = useState(props.manga);
  const [id, set_id] = useState('');
  const [title, set_title] = useState(props.title);

  useEffect(() => {
    set_manga_list(props.manga);
    set_id(props.id);
    set_title(props.title);
  }, [props.manga, props.id, props.title]);

  const list = manga_list.map( (manga, index) => {
    return (
      <MangaCover data={manga} key={`${manga}-${index}`} navigation={props.navigation} />
    );
  });

  return (
    <View style={styles.root}>
      <Text style={styles.title}> {title} </Text>
      <ScrollView
        style={styles.scroll_view}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {list}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingTop: GlobalStyle.dynamicSize(3),
    paddingBottom: GlobalStyle.dynamicSize(5),
    marginTop: GlobalStyle.dynamicSize(4),
    marginBottom: GlobalStyle.dynamicSize(4)
  },
  scroll_view: {
    width: '100%',
    height: GlobalStyle.dynamicSize(150),
  },
  manga_root: {
    width: GlobalStyle.dynamicSize(100),
    height: '100%',
    marginLeft: GlobalStyle.dynamicSize(2),
  },
  manga_image: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  title: {
    color: GlobalStyle.colors.color4,
    fontSize: GlobalStyle.dynamicSize(18),
    padding: GlobalStyle.dynamicSize(7),
    paddingTop: 0,
  }
});
