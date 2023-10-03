const Part = (props) => {
  return(
    <div>
      <p>{props.part} {props.exercise}</p>
    </div>
  )

}
const Header = (props) => {
  console.log(props)
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
      <Part part={props.p1} exercise={props.ex1}/>
      <Part part={props.p2} exercise={props.ex2}/>
      <Part part={props.p3} exercise={props.ex3}/> 
    </div>
  )
}
const Total = (props) => {
  console.log(props)
  console.log(props.ex1 + props.ex2 + props.ex3)
  return (
    <div>
      <p>Number of exercises {props.ex1 + props.ex2+ props.ex3}</p>
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
    exercises: 14
  }


  return (
    <div>
      <Header course={course}/>
      <Contest 
        p1={part1.name} ex1={part1.exercises}
        p2={part2.name} ex2={part2.exercises}
        p3={part3.name} ex3={part3.exercises}
      />
      <Total 
        ex1={part1.exercises}
        ex2={part2.exercises}
        ex3={part3.exercises}
      />
    </div>
  )
}

export default App