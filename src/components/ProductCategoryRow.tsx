import React from 'react'

type ProductCategoryRowProps={
  category:string
  
}


function ProductCategoryRow({category}:ProductCategoryRowProps) {
  return (
    <tr>
        <th colSpan={2}>{category}</th>
    </tr>
  )
}

export default ProductCategoryRow