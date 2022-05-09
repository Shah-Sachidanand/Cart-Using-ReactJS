import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";


class App extends React.Component {
  constructor(){
    super();
    this.state = {
        products: [
            {
                price: 39805,
                title: 'Apple Watch Series 7',
                qty: 1,
                img: 'https://www.reliancedigital.in/medias/Apple-Series-7-Smart-Watches-491998516-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzExNDl8aW1hZ2UvanBlZ3xpbWFnZXMvaGYxL2hkYi85NjQ5NDg1Nzc0ODc4LmpwZ3wwNGY5NWRmYjIyN2VmMDQxNmY3Y2Q4OGRjYmU4YzZmZmYyZjczNTMwZTQyYWM5ZDMyYjNmY2IzMzdkMWUxYjk3',
                id:1
            },
            {
                price: 20490,
                title: 'OnePlus Mobile',
                qty: 1,
                img: 'https://boip.in/53396-large_default/oneplus-nord-8gb-128gb-good-refurbished.jpg',
                id:2
            },
            {
                price: 86990,
                title: 'Inspiron 15 Laptop',          
                qty: 1,
                img: 'https://i.dell.com/is/image/DellContent//content/dam/global-asset-library/Products/Notebooks/Inspiron/15_5510_non-touch/in5510nt_cnb_00055lf110_gy.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=631&qlt=100,0&resMode=sharp2&size=631,402',
                id:3
            }
        ]

    }
    // this.testing();
}
handleIncreaseQuantaty = (product) => {
    const{ products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
        products
    })
}
handleDecreaseQuantaty = (product) => {
    const{ products } = this.state;
 
    const index = products.indexOf(product);
    if(products[index].qty === 0){
        return;
    }
    products[index].qty -= 1;

    this.setState({
        products
    })
}

handleDeleteProduct = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => item.id !== id);

    this.setState({
        products: items
    })
}
   getCartCount = () => {
  const { products } = this.state;

  let count = 0;
  products.forEach(product => {
    count += product.qty;
  })
  return count;
}
getCartTotal = () => {
  const { products } = this.state;

  let cartTotal = 0;
   products.map((product) => {
     cartTotal = cartTotal + product.qty * product.price
   })
   return cartTotal
}
  render(){
    const { products } = this.state;
    return (
    <div className="App">
      <Navbar count = {this.getCartCount()}/>
    <h1>Cart</h1>
    <Cart
    products = {products}
     onIncreaseQuantity = {this.handleIncreaseQuantaty}
     onDecreaseQuantity = {this.handleDecreaseQuantaty}
     onDeleteProduct = {this.handleDeleteProduct}
    />
    <div style={{padding: 10, fontSize: 20}}>
      TOTAL: {this.getCartTotal()}
    </div>
    </div>
  );
}
}

export default App;