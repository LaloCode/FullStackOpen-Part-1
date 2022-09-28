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
      <table>
        <tbody>
          <StatisticLine  text='good' data={good}/>
          <StatisticLine  text='neutral' data={neutral}/>
          <StatisticLine  text='bad' data={bad}/>
          <StatisticLine  text='all' data={totalSum}/>
          <StatisticLine  text='average' data={average}/>
          <StatisticLine  text='positive' data={positivePercent}/>
        </tbody>
      </table>
    </div>
  )
}

const StatisticLine  = ({text, data}) => <tr><td>{text}</td><td>{data}</td></tr>

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