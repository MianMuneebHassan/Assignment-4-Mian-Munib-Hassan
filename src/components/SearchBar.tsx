import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
type SearchBarProps={
  filterText:string
  setFilterText:React.Dispatch<React.SetStateAction<string>>
  inStockOnly:boolean
  setInStockOnly: React.Dispatch<React.SetStateAction<boolean>>


}
function SearchBar({filterText,setFilterText,inStockOnly,setInStockOnly}:SearchBarProps) {
  return (
    
    <form>
        <input type="text" value={filterText} onChange={(e)=>setFilterText(e.target.value)} placeholder='Search...'/>
       <div>
       <label>
            <input checked={inStockOnly} onChange={(e)=>setInStockOnly(e.target.checked)} type="checkbox"/>
            {" "}
            Only show product in stock
        </label>
       </div>
    </form>
  )
}

export default SearchBar