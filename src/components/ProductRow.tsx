import React from 'react'
type ProductRowProps={
  product:{
    category:string
    price:string
    stocked:boolean
    name:string
  };
}
function ProductRow({product}:ProductRowProps) {
    const name=product.stocked?product.name:<span style={{color:"red"}}>{product.name}</span>
  return (
    <tr>
        <td>{name}</td>
        <td>{product.price}</td>
    </tr>
  )
}

export default ProductRow