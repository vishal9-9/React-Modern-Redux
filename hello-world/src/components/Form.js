import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers'
import React, { Component } from 'react'
import axios from '../api/axios'

export class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: ''
      }
    }

    handleChange =  event => {
        this.setState({
            username: event.target.value,
            password: '12345678'
        })
        var data = new FormData()
    }

    handleSubmit = async event => {
        // alert(`${this.state.username}`)
        event.preventDefault()
        try{
            const response = await axios.post('login',
            {
                username: `${this.state.username}`,
                password: '12345678',
            },
            {
                headers: { "Content-Type": "multipart/form-data" }
            });
            console.log(response.data.access_token)
        }catch (err){
            if (err){
                console.log(err)
            }
        }
    }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <div>Form</div>
            <label>Username</label>
            <input type='text' value={this.state.username} onChange={this.handleChange}></input>
            <button type='Submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default Form