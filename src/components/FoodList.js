import "./foodlist.scss";

function FoodList({children}){
    return(
        <div className="food-list">
            {children}
        </div>
    )
}

export {FoodList};