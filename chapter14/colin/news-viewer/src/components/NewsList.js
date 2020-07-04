//  API값을 컴포넌트 배열로 렌더링
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import NewsItem from './NewsItem'
import usePromise from '../lib/usePromise'
import axios from 'axios'

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`

// const sampleArticle = {
//   title: '제목',
//   description: '내용',
//   url: 'https://google.com',
//   urlToImage: 'https://via.placeholder.com/160'
// }

const APIKey = '923877c6700442769f867df1fb45ea99'

const NewsList = ({ category }) => {
  //   const [articles, setArticles] = useState(null)
  //   const [loading, setLoading] = useState(false)
  //   useEffect(() => {
  //     // async 함수 따로 선언 (useEffect의 return값은 뒷정리 함수이기 때문)
  //     const fetchData = async () => {
  //       setLoading(true)
  //       try {
  //         const query = category === 'all' ? '' : `&category=${category}`
  //         const response = await axios.get(
  //           `http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${APIKey}`
  //         )
  //         setArticles(response.data.articles)
  //       } catch (e) {
  //         console.log(e)
  //       }
  //       setLoading(false)
  //     }
  //     fetchData()
  //   }, [category])
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`
    return axios.get(
      `http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${APIKey}`
    )
  }, [category])

  // 대기중 일 때
  if (loading) {
    return <NewsListBlock>대기 중..</NewsListBlock>
  }

  // 아직 articles값이 설정되지 않았을 때
  if (!response) {
    return null
  }

  if (error) {
    return <NewsListBlock>에러발생</NewsListBlock>
  }

  const { articles } = response.data
  return (
    <NewsListBlock>
      {articles.map(article => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  )
}

export default NewsList
