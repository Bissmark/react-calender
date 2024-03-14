import { useState } from 'react'
import Calender from './components/Calender'
import './App.css'

function App() {
    const days = [
        {
            name: "Sunday"
        },
        {
            name: "Monday"
        },
        {
            name: "Tuesday"
        },
        {
            name: "Wednesday"
        },
        {
            name: "Thursday"
        },
        {
            name: "Friday"
        },
        {
            name: "Saturday"
        },
    ]

    const dates = Array.from({length: 28}, (x, i) => i + 1)

    return (
        <div className='App'>
            <h1>React Calender</h1>
            <Calender days={days} dates={dates} />
        </div>
    )
}

export default App
