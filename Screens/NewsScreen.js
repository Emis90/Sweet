import React, { useState, useEffect } from 'react'
import { View, Text, Dimensions, ScrollView } from 'react-native'
const { width, height } = Dimensions.get('window')
import axios from 'axios'
import NewsCard from '../Components/NewsCard.js'
import styles from '../styles/screens.styles'
import { newsKey } from '../secret'
const NewsScreen = () => {
  const [newsToday, setNews] = useState([])
  console.log(newsToday)
  useEffect(() => {
    (async () => {
      let timesArticles = []
      let { data } = await axios.get('http://newsapi.org/v2/top-headlines?' + 'country=us&' + `apiKey=${newsKey}`)
      data.articles.forEach((article) => {
        if (article.source.name === 'New York Times' || article.source.name === 'Wall Street Journal') {
          timesArticles.push(article)
        }
      })
      setNews(timesArticles)
    })()

  }, [])

  return (
    <View style={styles.newsContainer}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', padding: '1%', marginBottom: 10 }}>
        Here some interesting news about food:
  </Text>
      <ScrollView style={{ paddingHorizontal: '3%' }}>
        {newsToday.length > 0 && newsToday.length > 0 ? newsToday.map((eachNews, id) => {
          return <NewsCard data={eachNews} key={eachNews.title} />
        }) : <Text>No data returned</Text>}
      </ScrollView >
    </View>
  )
}
export default NewsScreen