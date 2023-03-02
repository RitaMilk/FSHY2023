const Course =({course})=>{
    //const exe=course.parts.map(item=>item.exercises)
   //const total=exe.reduce((sum,exe)=>sum+exe,0)
   const total=course.parts.reduce((sum,item)=>sum+item.exercises,0)
   return(
   <>
   <Header course={course.name}/>
   <Content parts={course.parts}/>
   <h3>total of {total} exercises</h3>
   </>
   )
 }
 const Header = ({ course }) => <h2>{course}</h2>
 const Part = ({ part }) => 
   <p>
     {part.name} {part.exercises}
   </p>
 
 const Content = ({ parts }) => 
   <>
         {parts.map(part => 
           <Part key={part.id} part={part} />
         )}
   </>
   const CourseList = ({ courses }) => 
   <>
         <h1>Web Development Curriculum</h1>
         {courses.map(course => 
           <Course key={course.id} course={course} />
         )}
   </>
export default CourseList