import { useState,useEffect } from 'react'
import Maa from './components/Maa'
import maaService from './services/maat'
import Filter from '../src/components/Filter'
import MaaList from './components/MaaList'
import '../src/index.css'

const App = () => {
  //const maantiedot={name: 'Peru'}
  const [maat, setMaat] = useState(null)
  const [newCriteria, setNewCriteria] = useState('')
  //const [maaToShow,setMaaToShow]=useState('')
  const [maaListToShow,setMaaListToShow]=useState('')
  const [filterMessage,setFilterMessage]=useState('')
  useEffect(() => {
    //debugger
    console.log('effect_1')
    maaService
    .getAll()
    .then(returnedMaat => {
      console.log('promise 1 fulfilled')
      //console.log('iinitial persones data:',InitialPersones.data)
      const iniMaat=returnedMaat.data.map((item) =>( {name: item.name.common, 
                                                      capital:item.capital,
                                                      area:item.area,
                                                      languages:item.languages,
                                                      flag:item.flags.png,
                                                      latlng:item.latlng}))
      setMaat(iniMaat)
    })
  }, [])
  const handleCriteriaChange=(event)=>{
    console.log(event.target.value)
    setNewCriteria(event.target.value)
  }
 
  useEffect(() => {
    if (maat){
      //console.log('newCriteria',newCriteria)
      //console.log('maat',maat)
      //console.log('includes?',"Gambia".toLowerCase().includes("g"))
      const maaTable = maat.filter(item => item.name.toLowerCase().includes(newCriteria.toLowerCase()))
      //console.log('maaTable',maaTable)
      //console.log('maaTable',maaTable[0])
      //console.log('length=',maaTable.length)
      setFilterMessage('Too many country matches criteria. Try wider filter.')
      setMaaListToShow('')
      if (maaTable.length<11){
          setMaaListToShow(maaTable)
          //setMaaToShow('')
          setFilterMessage('')
        }
    } 
  }, [newCriteria])

  const handleShowMaaData = (id) =>{
    //console.log('Handle Show Maa')
    const oneMaaTable=maaListToShow.filter((item,index)=>(index===id))
    //console.log("yksi maa show=",maaListToShow[id])
    //console.log("yksi maa show Taulukkona =",oneMaaTable)
    setMaaListToShow(oneMaaTable)
    //setMaaToShow('')
    setFilterMessage('')
  }
  return(
  <div>
    <Filter newCriteria={newCriteria} handleCriteriaChange={handleCriteriaChange} message={filterMessage}/>
    {/* <Maa maa={maaToShow} /> */}
    <MaaList maat={maaListToShow} handleClick={handleShowMaaData}/>
  </div>
  )
}

export default App