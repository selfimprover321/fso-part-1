/* eslint-disable react/prop-types */
import { useState } from 'react'

const Button = ({onChange, text}) => {
  return(
    <>
      <button onClick = {onChange}>{text}</button>
    </>
  )
}
const StatisticLine = ({value, text}) => {
  return (
    <>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </>
  )
}

const Statistics = ({good, bad, neutral}) => {
  const total = (good + bad + neutral)
  const average = total/3
  const positive = good/total * 100
  if (good || bad || neutral){
    return (
      <div>
        <h1>Statistics</h1>
        <table>
          <StatisticLine text='good' value={good} />
          <StatisticLine text='neutral' value={neutral} />
          <StatisticLine text='bad' value={bad} />
          <StatisticLine text='all' value={total} />
          <StatisticLine text='average' value={average.toFixed(2)} />
          <StatisticLine text='positive' value={positive.toFixed(2) + "%"} />
        </table>
      </div>
      
    )
  }
  return (
    <div>
      No feedback given
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onChange={() => setGood(good+1)} text='good'/>
      <Button onChange={() => setNeutral(neutral+1)} text='neutral'/>
      <Button onChange={() => setBad(bad+1)} text='bad'/>
      <Statistics good={good} neutral = {neutral} bad={bad} />
    </div>
  )
}

export default App
