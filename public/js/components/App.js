class App extends React.Component{
   state = {
       shoppingCart:[]
   }
   addItemToCart = (product) => {
    this.setState(() => {
        this.state.shoppingCart.push(product);
        return {shoppingCart:this.state.shoppingCart}
    })
   }
   render() {
       return (
        <Layout 
            cart={this.state.shoppingCart}
            addToCart={this.addItemToCart}
            products={this.props.products}
        >

        </Layout>
       )
   }
}