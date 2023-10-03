const Header = ({name}) => {
    return <h1>{name}</h1>
  }
  
  const Total = ({sumOfExercises}) => {
    return <p>Number of exercises {sumOfExercises}</p>
  }
  
  const Part = ({name, exercises}) => {
    return (
      <p>
        {name} {exercises}
      </p>
    )
  }
  
  const Content = ({parts}) => {
    return (
      <div>
        {parts.map(line => 
          <Part key={line.id} name={line.name} exercises={line.exercises}/>
          )}
      </div>
    )
  }
  
  const Course =(props) => {
    const parts = props.parts
    const total = parts.reduce((sum, part) => sum + part.exercises, 0)
    return(
      <div>
        <Header name={props.name} />
        <Content parts={parts}/>
        <Total sumOfExercises={total}/>
        
      </div>
    )
  }


  export default Course