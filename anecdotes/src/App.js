import { useState } from 'react'

const Button = ({text, onClick}) => <button onClick={onClick}>{text}</button>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(7).fill(0))

  const getRandomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

  const getRandomAnecdote = () => {
    let newAnecdoteIndex = getRandomInteger(0, 7)
    while (newAnecdoteIndex === selected) {
      newAnecdoteIndex = getRandomInteger(0, 7)
    }
    setSelected(newAnecdoteIndex)
  }

  const increasePoints = () => {
    const pointsCopy = [...points]

    pointsCopy[selected] += 1

    setPoints(pointsCopy)
  }

  const getMaxPointsIndex = () => {
    let maxIndex = 0
    for (let i = 0; i < points.length; ++i) {
      if (points[i] > points[maxIndex]) {
        maxIndex = i
      }
    }

    return maxIndex
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>has {points[selected]} votes</div>
      <Button text='vote' onClick={increasePoints}/>
      <Button text='next anecdote' onClick={getRandomAnecdote}/>
      <h1>Anecdote with most votes</h1>
      <div>{anecdotes[getMaxPointsIndex()]}</div>
      <div>has {points[getMaxPointsIndex()]} votes</div>
    </div>
  )
}

export default App