function ShoppingCart(props) {
  const shoppingCartItems = props.cart
    .map(product => {
      return <ProductDetail />
    });
    return (
      {shoppingCartItems}
    )
}