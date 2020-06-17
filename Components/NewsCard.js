import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import styles from '../styles/components.styles'
const NewsCard = ({ data }) => { //author, content, description, publishedat, source(id, name), title, url, urlToImage
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardTitle}>
        <Text style={styles.title}>The {data.source.name}</Text>
      </View>
      <View style={{ paddingHorizontal: '6%' }}>
        <Text style={cartSubTitle}>{data.title}</Text>
        <View>
          {data.content ?
            <Text style={{ fontSize: 14, textAlign: 'justify' }}>{data.content}</Text>
            :
            <TouchableOpacity>
              <Text style={{ fontSize: 14, color: 'blue' }}>{data.url}</Text>
            </TouchableOpacity>
          }
        </View>
      </View>
    </View >
  )
}

export default NewsCard