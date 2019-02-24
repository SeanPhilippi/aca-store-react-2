function ProductList(props) {
  const productDetails = props.products.map((p, i) => {
    return  <ProductDetail 
      addToCart={props.addToCart}
      key={i} 
      product={p} />
  });

  return (
    <div className='product-list'>
      {props.products.length ? productDetails : 'No products available.'}
    </div>
  )
}