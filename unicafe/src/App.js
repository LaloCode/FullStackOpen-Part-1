import { useState } from 'react'

const Header = ({text}) => <h1>{text}</h1>

const Button = ({text, onClick}) => (
  <button onClick={onClick}>{text}</button>
)

const Statistics = ({good, neutral, bad}) => {
  const totalSum = good + neutral + bad
  const average = (good + (bad * -1)) / totalSum
  const positivePercent = ((good / totalSum) * 100) + ' %'

  if (totalSum === 0) {
    return <div>No feedback given</div>
  }
  return (
    <div>
      <DisplayStatistic text='good' data={good}/>
      <DisplayStatistic text='neutral' data={neutral}/>
      <DisplayStatistic text='bad' data={bad}/>
      <DisplayStatistic text='all' data={totalSum}/>
      <DisplayStatistic text='average' data={average}/>
      <DisplayStatistic text='positive' data={positivePercent}/>
    </div>
  )
}

const DisplayStatistic = ({text, data}) => <div>{text} {data}</div>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text='Give feedback'/>
      <Button text='good' onClick={() => setGood(good + 1)}/>
      <Button text='neutral' onClick={() => setNeutral(neutral + 1)}/>
      <Button text='bad' onClick={() => setBad(bad + 1)}/>
      <Header text='Statistics'/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App