import React from 'react'
import { View, TouchableOpacity, Text, Linking, Image } from 'react-native'
import styles from '../styles/components.styles'
const NewsCard = ({ data }) => { //author, content, description, publishedat, source(id, name), title, url, urlToImage
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardTitle}>
        <Text style={styles.title}>The {data.name}</Text>
      </View>

      <TouchableOpacity style={{ alignItems: 'center' }}
        onPress={() => Linking.openURL(data.url)}>
        <Image source={{ uri: data.imageUrl }} style={styles.image} />
      </TouchableOpacity>

      <View style={styles.labels}>
        <Text style={{ paddingHorizontal: 1, color: 'green', fontWeight: 'bold' }}>{data.labels.join().split(' * ')}</Text>
      </View>

    </View >
  )
}

export default NewsCard