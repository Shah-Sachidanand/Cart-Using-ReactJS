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
            {/*Buttons*/}
            <img alt="increase" 
            className="action-icons" 
            src="https://cdn-icons.flaticon.com/png/512/3303/premium/3303893.png?token=exp=1651918211~hmac=b29fe18b5f021e43ce8b863d61cc998a"
            onClick = {() => onIncreaseQuantity(product)}
        />
            <img alt="decrease" 
            className="action-icons" 
            src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
            onClick={() => onDecreaseQuantity(product)}
            />
            <img alt="delete"
            className="action-icons" 
            src="https://cdn-icons.flaticon.com/png/512/484/premium/484662.png?token=exp=1651918038~hmac=b8b3d592d8578e20651a4a0e107ab2de"
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