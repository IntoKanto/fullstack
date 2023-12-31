const Part = (props) => {
  return(
    <div>
      <p>{props.part} {props.exercise}</p>
    </div>
  )

}
const Header = (props) => {
  console.log(props.course.name)
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}
const Contest = (props) => {
  console.log()
  return(
    <div>
      <Part part={props.course.parts[0].name} exercise={props.course.parts[0].exercises}/>
      <Part part={props.course.parts[1].name} exercise={props.course.parts[1].exercises}/>
      <Part part={props.course.parts[2].name} exercise={props.course.parts[2].exercises}/> 
    </div>
  )
}
const Total = (props) => {
  let sum = props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises
 // console.log(props)
 // console.log(props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises)
  return (
    <div>
      <p>Number of exercises {sum}</p>
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
      <Header course={course}/>
      <Contest course={course} />
      <Total course={course} />
    </div>
  )
}

export default App

