import {useState} from 'react'

const Button = ({ text, onClick }) => 
  <button onClick={onClick}>{text}</button>

const Statistics = ({good, neutral, bad}) => {
  const countAll = good + neutral + bad 
  const average = countAll === 0 ? 0 : (good - bad) / countAll
  const positive = countAll === 0 ? 0 : (good / countAll) * 100

  return (
    <div>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {countAll}</p>
      <p>average {average}</p>
      <p>positive {positive} %</p>
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