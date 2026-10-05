import {useState} from 'react'

const Button = ({ text, onClick }) => 
  <button onClick={onClick}>{text}</button>

const StatisticsLine = ({text, value}) =>
  <tr><td>{text}</td><td>{value}</td></tr>

const Statistics = ({good, neutral, bad}) => {
  const countAll = good + neutral + bad 
  const average = countAll === 0 ? 0 : (good - bad) / countAll
  const positive = countAll === 0 ? 0 : (good / countAll) * 100

  if (countAll === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <h1>statistics</h1>
      <table>
      <tbody>
        <StatisticsLine text='good' value={good}/>
        <StatisticsLine text='neutral' value={neutral}/>
        <StatisticsLine text='bad' value={bad}/>
        <StatisticsLine text='all' value={countAll}/>
        <StatisticsLine text='average' value={average}/>
        <StatisticsLine text='positive' value={positive + ' %'}/>
      </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  return (
    <div>
      <h1>
        give feedback
      </h1>
      <Button text='good' onClick={handleGoodClick} />
      <Button text='neutral' onClick={handleNeutralClick} />
      <Button text='bad' onClick={handleBadClick} />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App 