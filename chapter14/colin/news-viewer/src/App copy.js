import React, { useState } from 'react'
import axios from 'axios'

const APIKey = '923877c6700442769f867df1fb45ea99'

const App = () => {
  const [data, setData] = useState(null)
  // const onClick = () => {
  //   axios.get('https://jsonplaceholder.typicode.com/todos/1').then(response => {
  //     setData(response)
  //   })
  // async 이용
  const onClick = async () => {
    try {
      const response = await axios.get(
        `http://newsapi.org/v2/top-headlines?country=kr&apiKey=${APIKey}`
      )
      setData(response.data)
    } catch (e) {
      console.log(e)
    }
    console.log('hello')
  }

  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </div>
  )
}

export default App
