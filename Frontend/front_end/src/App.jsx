import { useState } from 'react'
import {data} from "./data.js"


import './App.css'

function App() {
const [count, setCount] = useState(0)
console.log(data)
  return (
    <>
     <thead>
        <tr>
            <th>_id</th>
            <th>url</th>
            <th>source</th>
            <th>title</th>
            <th>text</th>
            <th>category</th>
            <th>tags</th>
            <th>word_count</th>
            <th>language</th>
        </tr>
      </thead>
      <tbody >
        {data.map((item) => (
          <tr>
            <td>{item._id}</td>
            <td>{item.url}</td>
            <td>{item.source}</td>
            <td>{item.title}</td>
            <td>{item.text}</td>
            <td>{item.category}</td>
            <td>{item.tags}</td>
            <td>{item.word_count}</td>
            <td>{item.language}</td>
          </tr>
        ))}
      </tbody>
    </>
  )
}

export default App
