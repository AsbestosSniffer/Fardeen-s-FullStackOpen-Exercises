const Header = (props) => {
  return (
    <div>
      <h2>
        {props.course.name}
      </h2>
    </div>
  )
}

const Part = (props) => {
  // console.log(props)
  return (
    <div>
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    </div>
  )
}
const Content = (props) => {
  // console.log(props.parts)
  // console.log(props.parts[0])
  return (
    <div>
      {props.course.parts.map(part => <Part key={part.id} part={part} />)}
     </div>
  )
}

const Total = (props) => {
  const total = props.course.parts.reduce((s, part) => s + part.exercises, 0)
  return (
    <div>
      <p>
        <b>
          total of {total} exercises
        </b>
      </p>
    </div>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course}/>
      <Total course={course}/>
    </div>
  )
}

export default Course 