import { ReactComponent as EmptySvg} from "../icon/illustration-empty-cart.svg";
import { ReactComponent as NeutralSvg} from "../icon/icon-carbon-neutral.svg";

import "./cartlist.scss";

function CartList( {children, setOrderActive} ){
    const handleActive = () => {
        setOrderActive(true);
    };

    const totalItems = children.reduce((ac, food) => {
        return ac + food.props.item.getQuantity();
    }, 0);

    const totalCost = children.reduce((ac, food) => {
        return ac + (food.props.item.getQuantity() * food.props.item.getPrice());
    }, 0);

    return(
        <div className="cart-list">
            <h3 className="cart-title">Your Cart ({totalItems})</h3>
            {
                (children.length !== 0)?(
                    <>
                        <div>
                            {children}
                        </div>
                        <div>
                            <div className="cart-total-order">
                                <p className="cart-order">Order Total</p>
                                <h3 className="cart-total">${totalCost.toFixed(2)}</h3>
                            </div>
                            <div className="neutral-div">
                                <NeutralSvg className="neutral-svg"/>
                                <p>This is a carbon-neutral delivery</p>
                            </div>
                            <button 
                                onClick={handleActive}
                                className="cart-button">Confirm Order
                            </button>
                        </div>
                    </>
                ):(
                    <>
                        <EmptySvg className="empty-svg"/>
                        <p className="cart-default">Your added items will appear here</p>
                    </>
                )
            }
        </div>
    )
}

export {CartList};