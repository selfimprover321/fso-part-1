import { useState } from 'react'

const App = () => {
  
  function setLargest(votes){
    const largestNum = Math.max(...votes)
    const largestIndex = votes.indexOf(largestNum)
    const largestAnectdote = anecdotes[largestIndex]
    setMaxVote([largestNum, largestAnectdote])
  }


  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]  
  function getArray(array){
    const finalArray = []
    for (let i = 0; i < array.length; i++){
      finalArray.push(0)
    }
    return finalArray;
  }

  const settingSelected = () => {
    const random = Math.floor(Math.random() * anecdotes.length)
    setSelected(random)
   }
  const addVote = () => {
    const copy = [...votes]
    copy[selected] = votes[selected] + 1
    setVotes(copy)
    setLargest(copy)
  }
   
  const begginingArray = getArray(anecdotes)

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(begginingArray)
  const [maxVote, setMaxVote] = useState([0, anecdotes[selected]])


  return (
    <div>
      <div>
        <h1>Anecdote of the day</h1>
        <p>{anecdotes[selected]} Votes: {votes[selected]} </p>    
        <button onClick = {settingSelected}>next anecdote</button>
        <button onClick = {addVote}>vote</button>
      </div>
      <div>
        <h1>Anecdote with the most votes</h1>
        <p>{maxVote[1]} Votes: {maxVote[0]}</p>
      </div>
    </div>
  )
}

export default App
