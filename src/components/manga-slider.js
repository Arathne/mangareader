import React, { useState, useEffect } from 'react';
import { ScrollView, Pressable, Image, StyleSheet, View, Text } from 'react-native';
import GlobalStyle from './../utils/global-style.js';
import Icon from './../utils/icons.js'

export default function MangaSlider (props) {
  const [manga_list, set_manga_list] = useState(props.manga);
  const [id, set_id] = useState('');

  useEffect(() => {
    set_manga_list(props.manga);
    set_id(props.id);
  }, [props.manga, props.id]);

  const list = manga_list.map( (manga, index) => {
    return (
      <Pressable
        style={styles.manga_root}
        key={`${manga.title}-${index}-${id}`}
      >
        <Image style={styles.manga_image} source={{uri: manga.image}} />
        <View style={styles.manga_view}>
          <Image style={styles.manga_view_icon} source={Icon.views} />
          <Text
            style={styles.manga_view_text}
          >
            {manga.views}
          </Text>
        </View>
      </Pressable>
    );
  });

  return (
    <ScrollView
      style={styles.scroll_view}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      {list}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll_view: {
    width: '100%',
    height: GlobalStyle.dynamicSize(135) + GlobalStyle.dynamicSize(15),
  },
  manga_root: {
    width: GlobalStyle.dynamicSize(100),
    height: '100%',
    marginLeft: GlobalStyle.dynamicSize(2),
  },
  manga_image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  manga_view: {
    height: GlobalStyle.dynamicSize(15),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  manga_view_text: {
    color: GlobalStyle.colors.color4,
    fontSize: GlobalStyle.text2.size
  },
  manga_view_icon: {
    height: '100%',
    width: GlobalStyle.dynamicSize(20),
    resizeMode:'contain',
    tintColor: 'white',
    marginRight:  GlobalStyle.dynamicSize(5),
  },
});
