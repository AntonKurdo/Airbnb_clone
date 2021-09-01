import React from 'react';
import { View, FlatList } from 'react-native';
import styles from './styles';

// DATA
import feed from '../../../assets/data/feed.js'

// COMPONENTS
import { Post } from '../../components/Post';

export const SearchResultScreen = () => {
  console.log(feed)
  return (
    <View style={styles.default}>    
      <FlatList 
        data={feed}
        renderItem={post => <Post post={post.item} />}
      />
    </View>
  )
};

