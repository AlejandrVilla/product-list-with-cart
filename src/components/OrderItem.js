import { FoodImage } from "./FoodImage";
import "./orderitem.scss";

function OrderItem( props ){
    return (
        <>
            <div className="order-item">
                <div className="order-content-card">
                    <div className="order-div-image">
                        <FoodImage
                            image={props.item.getImage()}
                            alt="order"
                            className="order-image"
                        />
                    </div>
                    <div className="order-category">
                        <p className="cart-name">{props.item.getName()}</p>
                        <div className="order-cost">
                            <p className="cart-quantity">{props.item.getQuantity()}x</p>
                            <p className="cart-price">@ ${props.item.getPrice().toFixed(2)}</p>
                        </div>
                    </div>
                </div>
                <p className="cart-subtotal">${(props.item.getPrice() * props.item.getQuantity()).toFixed(2)}</p>
            </div>
            <hr className="order-hr"/>
        </>
    )
}

export {OrderItem};