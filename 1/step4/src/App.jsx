const Part = (props) => {
  return(
    <div>
      <p>{props.part} {props.exercise}</p>
    </div>
  )

}
const Header = (props) => {
 // console.log(props)
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}
const Contest = (props) => {
  console.log(props)
  return(
    <div>
      <Part part={props.parts[0].name} exercise={props.parts[0].exercises}/>
      <Part part={props.parts[1].name} exercise={props.parts[1].exercises}/>
      <Part part={props.parts[2].name} exercise={props.parts[2].exercises}/> 
    </div>
  )
}
const Total = (props) => {
 // console.log(props)
  console.log(props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises)
  return (
    <div>
      <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
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
      <Header course={course}/>
      <Contest parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}
export default App