/*import { useState } from 'react'

const Button = ({onClick, text}) => {
  return (
    <div>
      <button onClick = {onClick}>
        {text}
      </button>
    </div>
  )
}

const Anectode = (props) => {
  return(
    <div>
      {props.anc[props.value]}
    </div>
  )
}

const Winner = ({ary, anecdotes}) => {
  const mostVotes = Math.max(...ary)
  const indMostVotes = ary.indexOf(mostVotes)
  const winner = anecdotes[indMostVotes]
  return(
    <div>
      {winner}
    </div>
  )
}

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

  const [indMax, setIndMax] = useState(0)
  const [selected, setSelected] = useState(0)
  const [ary, setAry] = useState(new Uint8Array(anecdotes.length))

  const onClick = () => {
    setSelected(getRandomIntInclusive(0, anecdotes.length-1))
  }

  const voteHandler = () => {
    console.log(ary)
    const copy = { ...ary}
    copy[selected] +=1 
    setAry(copy)
  }

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <div>
      <Anectode anc = {anecdotes} value = {selected} />
      <Button onClick = {onClick} text = 'next anecdote' />
      <Button onClick = {voteHandler} text = 'vote if you like this' />
      {ary[selected]} 
      <Winner ary = {ary} anecdotes = {anecdotes}/>
    </div>
  )
}

export default App*/

/*import { useState } from 'react'

const Button = ({onClick, text}) => (
    <button onClick = {onClick}>
      {text}
    </button>
  )

const Title = ({text}) => (
  <div>
    <h1>{text}</h1>
  </div>
)

const Feedback = ({onGood, onNeutral, onBad}) => (
    <div>
      <Button onClick = {onGood} text='good' />
      <Button onClick = {onNeutral} text='neutral' />
      <Button onClick = {onBad} text='bad' />
    </div>
)

const StatisticLine = ({text, value}) => {
  return(
    <tr><td>{text} {value}</td></tr>
  )
}

const Statistics = ({good, neutral, bad, allClicks}) => {
  if (good + neutral + bad === 0) return (<div>No feedback given</div>)
  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text = 'good' value = {good} />
          <StatisticLine text = 'neutral' value = {neutral} />
          <StatisticLine text = 'bad' value = {bad} />
          <StatisticLine text = 'all' value = {good + neutral + bad} />
          <StatisticLine text = 'average' value = {(good-bad)/(good + neutral + bad)} />
          <StatisticLine text = 'positive' value = {good/(good + neutral + bad)} />
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

  const onGood = () => setGood(good + 1)
  const onNeutral = () => setNeutral(neutral + 1)
  const onBad = () => {setBad(bad + 1)}

  return (
    <div>
      <Title text = 'give feedback' />
      <Feedback onGood = {onGood} onNeutral = {onNeutral} onBad = {onBad} />
      <Title text = 'statistics' />
      <Statistics good = {good} neutral = {neutral} bad = {bad} />
    </div>
  )
}

export default App*/

/*import { useState } from 'react'

const Button = ({onClick, text}) => (
  <button onClick = {onClick}>
    {text}
  </button>
  
)

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}


const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = (num) => () => {
    setAll(allClicks.concat('L'))
    setLeft(num + 1)
  }

  const setToValue = (newValue) => () => {
    //console.log('value now', newValue)  // print the new value to console
    setAll(allClicks.concat('L'))
    setLeft(newValue)
  }
  
  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      {left } 
      <Button
      onClick={handleLeftClick(2)}
      text = 'left' />
      <Button
      onClick={handleRightClick}
      text = 'right' />
      {right}
      <History allClicks = {allClicks}/>
    </div>
  )

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <p>{allClicks.join(' ')}</p>
    </div>
  )
}

export default App*/

/*import { useState } from 'react'

const Display = ({counter}) => {
  return (
    <div>
      {counter}
    </div>
  )
}

const Button = ({onClick, text}) => {
  return (
    <button onClick = {onClick}>
      {text}
    </button>
  )
}

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter}/>
      <Button
        onClick={increaseByOne}
        text='plus'
      />
      <Button
        onClick={setToZero}
        text='zero'
      />     
      <Button
        onClick={decreaseByOne}
        text='minus'
      />           
    </div>
  )
}

export default App*/


//THIS IS STEP 5 THIS IS STEP 5 THIS IS STEP 5

/*const Header = (props) => {
  return (
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p> {props.part} {props.exercise} </p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part = {props.parts[0].name} exercise = {props.parts[0].exercises} />
      <Part part = {props.parts[1].name} exercise = {props.parts[1].exercises} />
      <Part part = {props.parts[2].name} exercise = {props.parts[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
        Number of Exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
      </p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App*/



//THIS IS STEP 4 THIS IS STEP 4 THIS IS STEP 4

/*const Header = (props) => {
  return (
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p> {props.part} {props.exercise} </p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part = {props.parts[0].name} exercise = {props.parts[0].exercises} />
      <Part part = {props.parts[1].name} exercise = {props.parts[1].exercises} />
      <Part part = {props.parts[2].name} exercise = {props.parts[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
        Number of Exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App*/




// THIS IS STEP 3 THIS IS STEP 3 THIS IS STEP 3

/*const Part = (props) => {
  return (
    <div>
      <p> {props.part} {props.exercise} </p>
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part = {props.part1} exercise = {props.exercises1} />
      <Part part = {props.part2} exercise = {props.exercises2} />
      <Part part = {props.part3} exercise = {props.exercises3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
        Number of Exercises {props.total}
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 10
  }

  return(
    <div>
      <Header course = {course} />
      <Content 
      part1 = {part1.name} exercises1 = {part1.exercises}
      part2 = {part2['name']} exercises2 = {part2['exercises']}
      part3 = {part3.name} exercises3 = {part3.exercises} />
      <Total total = {part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

export default App*/



// THIS IS STEP 2 THIS IS STEP 2 THIS IS STEP 2



/*const Part = (props) => {
  return (
    <div>
      <p> {props.part} {props.exercise} </p>
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part = {props.part1} exercise = {props.exercises1} />
      <Part part = {props.part2} exercise = {props.exercises2} />
      <Part part = {props.part3} exercise = {props.exercises3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
        Number of Exercises {props.total}
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return(
    <div>
      <Header course = {course} />
      <Content 
      part1 = {part1} exercises1 = {exercises1}
      part2 = {part2} exercises2 = {exercises2}
      part3 = {part3} exercises3 = {exercises3} />
      <Total total = {exercises1 + exercises2 + exercises3} />
    </div>
  )

}

export default App*/



// THIS IS STEP 1 THIS IS STEP 1 THIS IS STEP 1



/*const Header = (props) => {
  return (
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p> {props.part1} {props.exercises1} </p>
      <p> {props.part2} {props.exercises2} </p>
      <p> {props.part3} {props.exercises3} </p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
        Number of Exercises {props.total}
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return(
    <div>
      <Header course = {course} />
      <Content 
      part1 = {part1} exercises1 = {exercises1}
      part2 = {part2} exercises2 = {exercises2}
      part3 = {part3} exercises3 = {exercises3} />
      <Total total = {exercises1 + exercises2 + exercises3} />
    </div>
  )

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

export default App*/

