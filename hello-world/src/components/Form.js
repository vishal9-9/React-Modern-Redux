// import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers'
import { useSelector, useDispatch } from 'react-redux'
import React from 'react'
// import axios from '../api/axios'



function Form() {

  const count = useSelector((state) => state.counter.count)

  return (
    <div>
      <form>
        <div>Form</div>
        <label>Username</label>
        <h1>{count}</h1>
        <input type='text' defaultValue='abc'></input>
        <button type='Submit'>Submit</button>
      </form>
    </div>
  )
}


export default Form