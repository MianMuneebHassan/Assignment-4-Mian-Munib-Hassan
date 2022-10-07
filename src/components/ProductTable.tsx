import React from 'react'
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';
type allProps={
    products:{
        category:string
        price:string
        stocked:boolean
        name:string
      }[]
      filterText:string
      inStockOnly:boolean
    }


    
function ProductTable({products,filterText,inStockOnly}:allProps) {
    var row:React.ReactNode[];
    row=[]
    let lastCategory:null | string=null;
   products.forEach((product)=>{
    if(product.name.toLowerCase().indexOf(filterText.toLowerCase())==-1){
        return;
    }
    if(inStockOnly && !product.stocked){
        return;
    }
    if(product.category!==lastCategory){
        row.push(<ProductCategoryRow category={product.category} key={product.category} />)
    }
    row.push(<ProductRow product={product} key={product.name}/>)
    lastCategory=product.category;

   })


  return (
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            {row}
        </tbody>
    </table>
  )
}

export default ProductTable