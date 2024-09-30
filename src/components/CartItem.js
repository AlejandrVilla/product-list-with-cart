import { ReactComponent as RemoveSvg } from "../icon/icon-remove-item.svg";
import "./cartitem.scss";

function CartItem( props ){

    const handleDeleteFood = (e) => {
        e.stopPropagation();
        const foodName = props.item.getName();
        props.deleteFood(foodName);
    }

    const removeButton =    <RemoveSvg 
                                onClick={handleDeleteFood}
                                className="remove-button"
                            />

    return (
        <>
            <div className="cart-item">
                <div className="cart-category">
                    <p className="cart-name">{props.item.getName()}</p>
                    <div className="cart-cost">
                        <p className="cart-quantity">{props.item.getQuantity()}x</p>
                        <p className="cart-price">@ ${props.item.getPrice().toFixed(2)}</p>
                        <p className="cart-subtotal">${(props.item.getPrice() * props.item.getQuantity()).toFixed(2)}</p>
                    </div>
                </div>
                {removeButton}
            </div>
            <hr className="cart-hr"/>
        </>
    )
}

export {CartItem};