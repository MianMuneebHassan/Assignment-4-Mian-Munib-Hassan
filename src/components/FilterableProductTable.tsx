import React, { useState } from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'

type FilterableProductTableProps={
  products:{
    category:string
    price:string
    stocked:boolean
    name:string
  }[]
}

function FilterableProductTable({products}:FilterableProductTableProps) {
  const [filterText,setFilterText]=useState("");
  const [inStockOnly,setInStockOnly]=useState(false);
  return (
    <div>
        <SearchBar filterText={filterText} inStockOnly={inStockOnly} setFilterText={setFilterText} setInStockOnly={setInStockOnly}/>
        <ProductTable filterText={filterText} inStockOnly={inStockOnly} products={products}/>
    </div>
  )
}

export default FilterableProductTable