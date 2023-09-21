import { useState } from 'react'


const StatisticLine = ({text, value}) => {
  return (
    <tr>
    <td>{text}</td>
    <td>{value}</td>
    </tr>
   )
}

const Statistics =({good, neutral, bad, all})=>{ 
  let average = (good*1 + bad * -1)/ all
  let positive = good/all*100  
  if (all === 0) {
    return (<div>No feedback given</div>)
  } return (
  <table>
    <tbody>
      <StatisticLine text='good' value={good}/>
      <StatisticLine text='neutral' value={neutral} />
      <StatisticLine text='bad' value={bad} />
      <StatisticLine text='total' value={all} />
      <StatisticLine text='average' value={average} />
      <StatisticLine text='positive' value={positive}/>
    </tbody>
  </table>
  )
}
const H1text = ({text}) => {
  return (
    <h1>{text}</h1>
  )
}
const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}



const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all ,setAll] = useState(0)
 
  
  
 
 
 
  
  return (
    <div>
      <H1text text='give feedback'/>
      <Button handleClick={() => {
        setGood(good + 1)
        setAll(all + 1)
      }} text='good'/>
      <Button handleClick={()=>{
        setNeutral(neutral +1)
        setAll(all + 1)
      }} text='neutral'/>
      <Button handleClick={()=> {
        setBad(bad + 1)
        setAll(all + 1)
      }} text='bad'/>
      <H1text text='statistics' />

      <Statistics good={good} neutral={neutral} bad={bad} all={all}/>
      
    </div>
  )
}

export default App
