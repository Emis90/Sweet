import React from 'react'
import { View, TouchableOpacity, Text, TouchableHighlight } from 'react-native'

const NewsCard = ({ data }) => { //author, content, description, publishedat, source(id, name), title, url, urlToImage
  return (
    <View style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'space-between',
      margin: '1%',
      marginWidth: 1,
      marginColor: 'pink'
    }}
    >
      <View style={{
        paddingHorizontal: '5%',
        alignItems: 'center',
        alignContent: 'center',
      }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'red' }}>{data.source.name}</Text>
      </View>
      <View style={{ paddingHorizontal: '6%' }}>
        <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'orange' }}>{data.title}</Text>
        <View>
          {data.content ?
            <Text style={{ fontSize: 14, textAlign: 'justify' }}>{data.content}</Text>
            :
            <TouchableHighlight>
              <Text style={{ fontSize: 14, color: 'blue' }}>{data.url}</Text>
            </TouchableHighlight>
          }
        </View>
      </View>
    </View >
  )
}

export default NewsCard