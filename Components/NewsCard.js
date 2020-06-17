import React from 'react'
import { View, TouchableOpacity, Text, Linking } from 'react-native'
import styles from '../styles/components.styles'
const NewsCard = ({ data }) => { //author, content, description, publishedat, source(id, name), title, url, urlToImage
  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity onPress={() => Linking.openURL(data.url)}>
        <View style={styles.cardTitle}>
          <Text style={styles.title}>The {data.source.name}</Text>
        </View>
        <View style={{ display: 'flex', flexDirection: 'column', paddingHorizontal: '6%', justifyContent: 'center' }}>
          <Text style={styles.subCardTitle}>{data.title}</Text>
          <View>
            <Text style={{ fontSize: 14, textAlign: 'justify' }}>{data.content}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View >
  )
}

export default NewsCard