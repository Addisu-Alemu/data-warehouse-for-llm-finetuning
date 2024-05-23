import { useState } from 'react'
import {data} from "./data.js"

import './App.css'

function Table() {
  return (
    <>
        <thead>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
        </tr>
        </thead>
    </>
  )
}

export default Table
