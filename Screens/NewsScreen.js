import React, { useState, useEffect } from 'react'
import { View, Text, Dimensions, ScrollView } from 'react-native'
const { width, height } = Dimensions.get('window')
import axios from 'axios'
import NewsCard from '../Components/NewsCard.js'
import styles from '../styles/screens.styles'
import { newsKey } from '../secret'
const NewsScreen = () => {
  const [newsToday, setNews] = useState([])
  useEffect(() => {
    (async () => {
      let timesArticles = []
      let { data } = await axios.get('http://newsapi.org/v2/top-headlines?' + 'country=us&' + `apiKey=${newsKey}`)
      data.articles.forEach((article) => {
        if (article.source.name === 'New York Times' || article.source.name === 'The Washington Post' || article.source.name === 'Forbes' || article.source.name === 'Youtube') {
          timesArticles.push(article)
        }
      })
      let trimmed = timesArticles.map((article) => {
        article.content = article.content.slice(0, 150) + ' ... '
        return article
      })
      setNews(trimmed)
    })()

  }, [])

  return (
    <View style={styles.newsContainer}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', padding: '1%', marginBottom: 10 }}>
        Food News!
     </Text>
      <ScrollView style={{ paddingHorizontal: '4%' }}>
        {newsToday.length > 0 && newsToday.length > 0 ? newsToday.map((eachNews, id) => {
          return <NewsCard data={eachNews} key={eachNews.title} />
        }) : <Text>No articles today</Text>}
      </ScrollView >
    </View>
  )
}
export default NewsScreen