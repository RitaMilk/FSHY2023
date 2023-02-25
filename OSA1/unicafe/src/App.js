import { useState } from 'react'
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const Header = (props) => {
  return(
    <div>
      <h1>{props.text}</h1>
    </div>
  )
}
const StatisticLine = (props) => {
  return(
    //<div>
      <tr>
      <td>{props.text}</td> <td>{props.count}</td> <td>{props.unit}</td>
      </tr>
    //</div>
  )
}
const Statistics = (props) => {
  if (props.total===0){
    return(
      <div>
        <Header text="statistics" />
        No feedback is given
      </div>
    )
}
return(
  <div>
    <Header text="statistic" />
    <table >
    <StatisticLine text="good" count={props.good}/>
    <StatisticLine text="neutral" count={props.neutral}/>
    <StatisticLine text="bad" count={props.bad}/>
    <StatisticLine text="total" count={props.total}/>
    <StatisticLine text="average" count={(props.good+(-1)*props.bad)/props.total}/>
    <StatisticLine text="positive" count={props.good/props.total*100} unit="%"/> 
    </table>
  </div>
)
}
const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  
  const handleGoodClick = () => {
    console.log('clicked the GOOD button')
    const good1=good+1
    setGood(good1)
    setTotal(good1+neutral+bad)
  }
  const handleNeutralClick = () => {
    console.log('clicked the NEUTRAL button')
    const neutral1=neutral+1
    setNeutral(neutral1)
    setTotal(good+neutral1+bad)
  }
  const handleBadClick = () => {
    console.log('clicked the BAD button')
    const bad1=bad+1
    setBad(bad1)
    setTotal(good+neutral+bad1)
  }
  return (
    <div>
        <Header text="give feedback"/>
        <Button handleClick={handleGoodClick} text='good' />
        <Button handleClick={handleNeutralClick} text='neutral' />
        <Button handleClick={handleBadClick} text='bad' />
        <Statistics 
          good={good} 
          neutral={neutral} 
          bad ={bad} 
          total={total}
        />
    </div>
  )
}

export default App