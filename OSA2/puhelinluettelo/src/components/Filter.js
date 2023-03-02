const Filter=({newCriteria,handleCriteriaChange})=>{
    return(
        <div>filter shown with <input 
                  value={newCriteria} 
                  onChange={handleCriteriaChange}/></div>
    )
}
export default Filter 