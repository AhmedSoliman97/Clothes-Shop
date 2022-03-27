import React, { useState } from 'react';

export const ProductContext= React.createContext({
    products: [],
    toggleProductFavorite:(id)=>{}
});



const ProductContextProvider=(props)=>{
    const [init_products,setInit_Products]=useState(
        [
            {
              id: 'p1',
              title: 'Red Scarf',
              description: 'A pretty red scarf.',
              isFavorite: false
            },
            {
              id: 'p2',
              title: 'Blue T-Shirt',
              description: 'A pretty blue t-shirt.',
              isFavorite: false
            },
            {
              id: 'p3',
              title: 'Green Trousers',
              description: 'A pair of lightly green trousers.',
              isFavorite: false
            },
            {
              id: 'p4',
              title: 'Orange Hat',
              description: 'Street style! An orange hat.',
              isFavorite: false
            }
          ]
    );
    const toggleFavorite=(productId)=>{

        setInit_Products(currentPoduct=>{
            const prodIndex = currentPoduct.findIndex(
                p => p.id === productId
              );
              const newFavStatus = !currentPoduct[prodIndex].isFavorite;
              const updatedProducts = [...currentPoduct];
              updatedProducts[prodIndex] = {
                ...currentPoduct[prodIndex],
                isFavorite: newFavStatus
              };
              return updatedProducts;

        }) 
    }
    return(
        <div>
            <ProductContext.Provider value={{ products:init_products, toggleProductFavorite:toggleFavorite}}>
                {props.children}
            </ProductContext.Provider>
        </div>
    )
  
}

export default ProductContextProvider;