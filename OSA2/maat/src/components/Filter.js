const Filter=({newCriteria,handleCriteriaChange,message})=>{
    return(
        <div>find countries <input 
                  value={newCriteria} 
                  onChange={handleCriteriaChange}/>
            <p>{message}</p>          
        </div>
    )
}
export default Filter 