import { useState } from 'react';

const initialProducts = [{
  id: 0,
  name: 'Baklava',
  count: 1,
}, {
  id: 1,
  name: 'Cheese',
  count: 5,
}, {
  id: 2,
  name: 'Spaghetti',
  count: 2,
}];

export default function ShoppingCart() {
  const [products,setProducts] = useState(initialProducts)

  function handleIncreaseClick(productId) {
    const updateProducts = [...products]
    let currentProduct = updateProducts.find(a=> a.id === productId)
    currentProduct.count += 1
    setProducts( updateProducts )
    console.log(initialProducts)
  }

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name}
          {' '}
          (<b>{product.count}</b>)
          <button onClick={() => {
            handleIncreaseClick(product.id);
          }}>
            +
          </button>
        </li>
      ))}
    </ul>
  );
}

//solution 2 using maps

export function ShoppingCart2() {
  const [ products,setProducts ] = useState(initialProducts)

  function handleIncreaseClick2(productId) {
    setProducts(products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          count: product.count + 1
        };
      } else {
        return product;
      }
    }))
  }

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name}
          {' '}
          (<b>{product.count}</b>)
          <button onClick={() => {
            handleIncreaseClick2(product.id);
          }}>
            +
          </button>
        </li>
      ))}
    </ul>
  );
}

//challenge 3



export function ShoppingCart3() {
  const [products,setProducts] = useState(initialProducts)

  function handleIncreaseClick3(productId) {
    setProducts(products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          count: product.count + 1
        };
      } else {
        return product;
      }
    }))
  }
  function handleDecreaseClick3(productId){
    const dProduct = [...products]
    let currentProduct = dProduct.find(a=>a.id===productId)
    if(currentProduct.count < 2){
      const removeProduct = dProduct.filter(a=>a.id!==currentProduct.id)
      setProducts(
        removeProduct
      )
      return;
    }
    currentProduct.count-=1
    setProducts(dProduct)
  }

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name}
          {' '}
          (<b>{product.count}</b>)
          <button onClick={() => {
            handleIncreaseClick3(product.id);
          }}>
            +
          </button>
          <button onClick={()=>
          handleDecreaseClick3(product.id)
          }>
            –
          </button>
        </li>
      ))}
    </ul>
  );
}
