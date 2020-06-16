import React, { useState, useEffect } from 'react'
import { View, Text, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
const { width, height } = Dimensions.get('window')
import axios from 'axios'
import { newsKey } from '../api.js'
import NewsCard from '../Components/NewsCard.js'

const Home = () => {
  const [newsToday, setNews] = useState([])

  useEffect(() => {
    (async () => {
      let { data } = await axios.get('http://newsapi.org/v2/top-headlines?' + 'country=us&' + `apiKey=${newsKey}`)
      setNews(data.articles)
    })()
  }, [])

  return (
    <View style={{
      height,
      paddingTop: '25%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: 'lightGrey'
    }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', padding: '1%', marginBottom: 10 }}>
        Welcome to your Home page:
    </Text>
      <ScrollView style={{ paddingHorizontal: '3%' }}>
        {newsToday.length > 0 && newsToday.length > 0 ? newsToday.map((eachNews, id) => {
          return <NewsCard data={eachNews} key={eachNews.title} />
        }) : <Text>No data returned</Text>}
      </ScrollView >
    </View>
  )
}


export default Home