import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [height, setHeight] = useState(0)
  const [superPower, setSuperPower] = useState('')
  const [displayHero, setDisplayHero] = useState(false)

  return (
    <>
      <div className='App'>
        <div>
          <h1>Build a Hero</h1>
          <label>Name:</label>
          <input 
            type='text' 
            placeholder='Hero Name' 
            style={{ margin: 10 }} 
            onChange={(event) => {setName(event.target.value)}} 
          />
          <label>Age:</label>
          <input 
            type='number' 
            placeholder='Hero Age' 
            style={{ margin: 10 }} 
            onChange={(event) => {setAge(event.target.value)}} 
          />
          <label>Height:</label>
          <input 
            type='text' 
            placeholder='Hero Height' 
            style={{ margin: 10 }} 
            onChange={(event) => {setHeight(event.target.value)}} 
            />
          <label>Superpower:</label>
          <input 
            type='text' 
            placeholder='Hero Superpower' 
            style={{ margin: 10 }} 
            onChange={(event) => {setSuperPower(event.target.value)}} 
            />
        </div>
        <button onClick={()=>{
          setDisplayHero(true)
        }}>Display Character</button>
        <div className='hero'>
          <h1>Hero Info</h1>
          {displayHero && (
            <ul>
              <li>Name: {name}</li>
              <li>Age: {age}</li>
              <li>Height (in cm): {height}</li>
              <li>Superpower: {superPower}</li>
            </ul>
          )}
        </div>
      </div>
    </>
  )
}

export default App
