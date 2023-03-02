import Button from "./Button"

const Person = ({ id,person,number,deletePerson }) => {
  // console.log('component Person ja key=',keyID)
    return (
      
      <div key={id}> 
       {person}  {number}        <Button  text="delete"  handleClick={deletePerson} id={id}/>
      </div>
      
    )
  }
  
  export default Person