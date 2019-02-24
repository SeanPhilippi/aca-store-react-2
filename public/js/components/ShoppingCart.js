function ShoppingCart(props) {
  const shoppingCartItems = props.cart
    .map(product => {
      return <ProductDetail product={product} />
    });
    return (
      <div className='cart-container'>
        <div className='cart-items'>
          {shoppingCartItems}
        </div>
        <Checkout />
      </div>
    )
}

ShoppingCart.propTypes = {
  cart: PropTypes.array,
}