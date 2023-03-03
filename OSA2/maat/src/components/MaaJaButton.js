import Button from "./Button"

const MaaJaButton =(props)=>{
    //debugger
    if (props.maa){
      
     return(
     <p>
     {props.maa} <Button text="Show" handleClick={()=>props.handleClick(props.id)}/>
     </p>
     )
   }
   return(
    <></>
  )
   }
   
  export default MaaJaButton