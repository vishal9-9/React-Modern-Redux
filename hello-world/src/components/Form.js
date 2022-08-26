// import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers'
import { useSelector, useDispatch } from 'react-redux'
import React from 'react'
import { INCREMENT , DECREMENT } from '../redux/test/testSlice'
// import axios from '../api/axios'



function Form() {

  const count = useSelector((state) => state.counter.count)

  const name = useSelector((state) => state.counter.name)

  const dispatch = useDispatch()

  return (
    <div>
      
        <div>Form</div>
        <label>Username</label>
        <h1>{count}</h1>
        <h1>{name}</h1>
        <input type='text' defaultValue='abc'></input>
        <button onClick={() => dispatch(INCREMENT())}>+</button>
        <button onClick={() => dispatch(DECREMENT())}>-</button>
      
    </div>
  )
}


export default Form