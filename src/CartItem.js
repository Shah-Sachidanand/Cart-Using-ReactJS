import React from "react";

const CartItem = (props) => {
const { price, title, qty} = props.product;
const { 
    product, 
    onDecreaseQuantity, 
    onIncreaseQuantity,
    onDeleteProduct 
} = props;
return(
    <div className="cart-item">
        <div className="left-block">
            <img style={styles.Image} src={product.img}/>
        </div>
        <div className="right-block">
        <div style={{fontSize: 25}}>{title}</div>
        <div style={{color: '#777'}}>Rs {price}</div>
        <div style={{color: '#777'}}>Qty {qty}</div>
        <div className="cart-item-actions">
        
            <img alt="increase" 
            className="action-icons" 
            src="https://as2.ftcdn.net/v2/jpg/01/07/62/07/1000_F_107620769_UwNVSoXnKS4VNcOKoZjPohlEPn83oE38.jpg"
            onClick = {() => onIncreaseQuantity(product)}
        />
            <img alt="decrease" 
            className="action-icons" 
            src="https://as2.ftcdn.net/v2/jpg/01/07/62/09/1000_F_107620985_YEVa8uBObxyKA2DkTSiDL6llE0m0Uzqt.jpg"
            onClick={() => onDecreaseQuantity(product)}
            />
            <img alt="delete"
            className="action-icons" 
            src="https://cdn-icons.flaticon.com/png/512/3945/premium/3945154.png?token=exp=1652433687~hmac=b5445a1d68f00f240a21bf68eb30d360"
            onClick={() => onDeleteProduct(product.id)}
        />                     
        </div>
        </div>
    </div>
)
}
const styles = {
    Image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        backgroundColor: '#ccc'
    }
}


export default CartItem;