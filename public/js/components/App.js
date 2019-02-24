class App extends React.Component{
   state = {
       shoppingCart:[],
       view: 'products',
       products: [],
   }

   componentDidMount() {
       fetch('https://acastore.herokuapp.com/products')
        .then(res => res.json())
        .then(data => 
            // console.log('data', data)
            this.setState({products: [...data]})
        )
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
            products={this.state.products}
        >
            {/* conditional logic for what to render, changes based on value of state.view */}
            {this.state.view === 'products' ? 
            <ProductList addToCart={this.addItemToCart} products={this.state.products}/> : 
            <ShoppingCart cart={this.state.shoppingCart} />}
        </Layout>
       )
   }
}

App.propTypes = {
    products: PropTypes.array,
}