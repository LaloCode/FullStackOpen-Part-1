import { useState } from 'react'

const Header = ({text}) => <h1>{text}</h1>

const Button = ({text, onClick}) => (
  <button onClick={onClick}>{text}</button>
)

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
      <DisplayStatistic text='good' data={good}/>
      <DisplayStatistic text='neutral' data={neutral}/>
      <DisplayStatistic text='bad' data={bad}/>
    </div>
  )
}

export default App