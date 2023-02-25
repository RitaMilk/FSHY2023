const App = () => {
  /* const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const courses=[
    {name: part1, exe: exercises1},
    {name: part2, exe: exercises2},
    {name: part3, exe: exercises3}
  ] */
  
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
      <Header course={course.name}/>
      <Content courses={course.parts}/>
      <Total courses={course.parts}/>
      
    </div>
  )
}
const Header = (props) => {
  return(
    <div>
      <h1>{props.course}</h1>
      
    </div>
  )
}
const Content=(props)=>{
  //const c=props
  return(
    <div>
      
      <Part course={props.courses[0]}/>
      <Part course={props.courses[1]}/>
      <Part course={props.courses[2]}/>
    </div>
  )
}
const Total=(props)=>{
  return(
    <p>Number of exercises {props.courses[0].exercises + props.courses[1].exercises + props.courses[2].exercises}</p>
  )
}
const Part=(props)=>{
  return(
    <div>
      <p>
        {props.course.name} {props.course.exe}
      </p>
    </div>
  )
}
export default App;
