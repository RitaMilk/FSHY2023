import MaaJaButton from "./MaaJaButton"
import Maa from "./Maa"
const MaaList =(props)=>{
    //debugger
    //console.log('Componenti MaaList. Välitetyt maat',props.maat)
    //console.log('length=',props.maat.length)
    if (props.maat.length>1){
        return(
            <>
            {/* {console.log('lengh=',props.maat.length)} */}
            {props.maat.map((item,index)=>(<MaaJaButton key={index} id={index} maa={item.name} handleClick={props.handleClick}/>))}
            </>
            )
    }else
    if (props.maat.length===1){
        return(
            <div>
            <p>yksi maa listassa</p>
            <Maa maa={props.maat[0]}/>
            </div>
        )
    }
    }
    
   
  export default MaaList