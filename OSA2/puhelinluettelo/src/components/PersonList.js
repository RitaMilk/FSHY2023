import Person from "./Person"
const PersonList = (props) => 
{

  return ( props.namesToShow.map((person, index) => 
    //debugger
  
  
     <Person key ={index} id={person.id}  
       person={person.name} 
       number={person.number} 
       deletePerson={props.deletePerson}/>
  
)
  )
}
export default PersonList