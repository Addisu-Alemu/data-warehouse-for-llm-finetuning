import { useState, useEffect } from 'react'
import {data} from "./data.js"
import axios from "axios"
import './App.css'
import Api_using_axios from './Components/Api_using_axios.jsx'
function App() {
const [search, setSearch] = useState("")
console.log(search)
  return (
    <>
    <div className='m-auto w3/4'>
  <form className="search-container">
    <input className='input' onChange={(e) =>setSearch(e.target.value)} type="search" placeholder="Search" aria-label="Search" />
    <button className='button' type="submit">Search</button>
</form>

     <thead className='outer_table'>
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
      <tbody className='outer_table' >
        {data.filter((item) => {
          return search.toLocaleLowerCase() == "" ? item : item.text.toLowerCase().includes(search);
        }).map((item) => (
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
      </div>
      {/* < Api_using_axios /> */}
    </>
  )
}

export default App
