import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')


  return (
    <>
      <div className='App'>
        <h1>Build a Hero</h1>
        <label>Name:</label>
        <input type='text' placeholder='Hero Name' style={{ margin: 10 }} />
        <label>Age:</label>
        <input type='number' placeholder='Hero Age' style={{ margin: 10 }} />
        <label>Height:</label>
        <input type='text' placeholder='Hero Height' style={{ margin: 10 }} />
        <label>Superpower:</label>
        <input type='text' placeholder='Hero Superpower' style={{ margin: 10 }} />
      </div>
    </>
  )
}

export default App
