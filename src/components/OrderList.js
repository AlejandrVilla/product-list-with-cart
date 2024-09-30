import { ReactComponent as ConfirmSvg } from "../icon/icon-order-confirmed.svg";

import "./orderlist.scss";

function OrderList( {children, clearFood} ){
    const handleClearFood = () => {
        clearFood();
    }

    const totalCost = children.reduce((ac, food) => {
        return ac + (food.props.item.getQuantity() * food.props.item.getPrice())
    }, 0);

    return(
        <div className="popup">
            <div className="order-list">
                <ConfirmSvg className="confirm-svg"/>
                <h1 className="order-list-title">Order Confirmed</h1>
                <p className="order-list-subtitle">We hope you enjoy your food!</p>
                <div className="order-list-info">
                    <div className="order-list-content">
                        <div>
                            {children}
                        </div>
                        <div className="order-total">
                            <p className="cart-order">Order Total</p>
                            <h3 className="cart-total">${totalCost.toFixed(2)}</h3>
                        </div>
                    </div>
                    <button 
                        onClick={handleClearFood}
                        className="order-button">Start New Order
                    </button>
                </div>
            </div>
        </div>
    )
}

export {OrderList};