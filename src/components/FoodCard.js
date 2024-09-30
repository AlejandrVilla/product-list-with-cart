import { ReactComponent as AddSvg} from  "../icon/icon-add-to-cart.svg";
import { ReactComponent as DecrementSvg } from "../icon/icon-decrement-quantity.svg"
import { ReactComponent as IncrementSvg } from "../icon/icon-increment-quantity.svg"
import { FoodImage } from "./FoodImage";
import "./foodcard.scss";

function FoodCard( props ){

    const handleIncrementFood = (e) => {
        e.stopPropagation();
        const newFoodName = props.item.getName();
        props.incrementFood(newFoodName);
    };

    const handleDecrementFood = (e) => {
        e.stopPropagation();
        const newFoodName = props.item.getName();
        props.decrementFood(newFoodName);
    };

    const addButton =   <AddSvg 
                            className="add-to-cart-svg"
                        />
    const decrementButton = <DecrementSvg   
                                onClick={handleDecrementFood}      
                                className="card-button"
                            />

    const incrementButton = <IncrementSvg 
                                onClick={handleIncrementFood}      
                                className="card-button"
                            />

    const quantity = props.item.getQuantity();

    return(
        <div className="food-card">
            <div className="card">
                <div
                    onClick={handleIncrementFood} 
                    className="image-div">
                    <FoodImage 
                        image={props.item.getImage()}
                        alt="item" 
                        className="image"
                    />
                    {/* <img 
                        className="image" 
                        src={props.item.getImage().desktop} 
                        alt="food"
                    ></img> */}
                </div>
                {
                    (quantity === 0)? (
                        <div
                            onClick={handleIncrementFood} 
                            className="add-div"
                        >
                            {addButton}
                            <h4>Add to Cart</h4>
                        </div>
                    ):(
                        <div 
                            className="add-div-active"
                        >
                            {decrementButton}
                            <p>{props.item.getQuantity()}</p>
                            {incrementButton}
                        </div>
                    )
                }
                <div className="card-content">
                    <p className="card-category">{props.item.getCategory()}</p>
                    <h4 className="card-name">{props.item.getName()}</h4>
                    <h4 className="card-price">${props.item.getPrice().toFixed(2)}</h4>
                </div>
            </div>
        </div>
    )
}

export {FoodCard};