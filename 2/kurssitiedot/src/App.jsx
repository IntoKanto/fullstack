import Course from "./components/Course"


const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    },
    {
      name: 'Git',
      id: 3,
      parts: [
        {
          name: 'Command Line',
          exercises: 3,
          id: 1
        },
        {
          name: 'Source Control',
          exercises: 7,
          id: 2
        }
      ]
    }

  ]
  console.log(courses[0])
  return (
    <div>
      {courses.map(line => 
        <Course key={line.id} name={line.name} parts={line.parts} />
        )}
    </div>
  )
}

export default App