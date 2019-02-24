class App extends React.Component{
   state = {
       shoppingCart:[],
       view: 'products'
   }

   changeView = (page) => {
       console.log('fired')
       return page === 'products' ? 
        this.setState(() => {
            return {view: 'products'};
        }) : 
        this.setState(() => {
            return {view: 'cart'};
        })
   }

   addItemToCart = (product) => {
    this.setState(() => {
        this.state.shoppingCart.push(product);
        return {shoppingCart: this.state.shoppingCart}
    })
   }

   render() {
       return (
        <Layout 
            cart={this.state.shoppingCart}
            changeView={this.changeView}
        >
            {this.state.view === 'products' ? 
            <ProductList addToCart={this.addItemToCart} products={this.props.products}/> : 
            <ShoppingCart cart={this.state.shoppingCart} />}
        </Layout>
       )
   }
}

App.propTypes = {
    products: PropTypes.array,
}