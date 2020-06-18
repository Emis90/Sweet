import React, { useState, useEffect } from 'react'
import { View, Text, Dimensions, ScrollView } from 'react-native'
const { width, height } = Dimensions.get('window')
import axios from 'axios'
import NewsCard from '../Components/NewsCard.js'
import styles from '../styles/screens.styles'
import { dessertId, dessertKey } from '../secret'
const NewsScreen = () => {
  const [newsToday, setNews] = useState([])
  useEffect(() => {
    (async () => {
      let filtered = []
      let { data } = await axios.get(`https://api.edamam.com/search?q=dessert&from=0&to=30&app_id=${dessertId}&app_key=${dessertKey}`)
      data && data ?
        data.hits.forEach(el => {
          let recipe = {}
          recipe.url = el.recipe.url
          recipe.name = el.recipe.label
          recipe.imageUrl = el.recipe.image
          recipe.labels = el.recipe.healthLabels
          filtered.push(recipe)
        }) : null
      setNews(filtered)
    })()

  }, [])
  console.log(newsToday)
  return (
    <View style={styles.newsContainer}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', padding: '1%', marginBottom: 10 }}>
        Fun Food Recipes!
     </Text>
      <Text style={{ fontSize: 16, padding: '1%', fontWeight: 'bold', marginBottom: 10 }}>Click on the image to checkout the full recipe</Text>
      <ScrollView style={{ paddingHorizontal: '4%' }}>
        {newsToday.length > 0 && newsToday.length > 0 ? newsToday.map((eachNews, id) => {
          return <NewsCard data={eachNews} key={eachNews.name} />
        }) : null}
      </ScrollView >
    </View>
  )
}
export default NewsScreen