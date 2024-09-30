import { useState } from 'react'
import { CartList } from "./components/CartList";
import { FoodCard } from "./components/FoodCard";
import { FoodList } from "./components/FoodList";
import { CartItem } from "./components/CartItem";
import { OrderList } from "./components/OrderList";
import { OrderItem } from "./components/OrderItem";
import data from "./data.json";
import Food from "./utils";
import "./app.scss";

let foodItems = data.map( food =>
    new Food(food.image, food.name, food.category, food.price)
)

function App(){
    const [ foods, setFoods ] = useState(foodItems);
    const [ orderActive, setOrderActive ] = useState(false);

    const incrementFood = (newFoodName) => {
        const currentFood = foods.find(food => food.getName() === newFoodName);
        const newFood = new Food(
            currentFood.getImage(),
            currentFood.getName(),
            currentFood.getCategory(),
            currentFood.getPrice()
        );
        newFood.setQuantity(currentFood.getQuantity() + 1);

        setFoods((prevFoods) => {
            return prevFoods.map(food =>
              food.getName() === newFood.getName() ? newFood : food
            );
          }
        );
    }

    const decrementFood = (newFoodName) => {
        const currentFood = foods.find(food => food.getName() === newFoodName);
        const newFood = new Food(
            currentFood.getImage(),
            currentFood.getName(),
            currentFood.getCategory(),
            currentFood.getPrice()
        );
        newFood.setQuantity(currentFood.getQuantity() - 1);

        setFoods((prevFoods) => {
            return prevFoods.map(food =>
              food.getName() === newFood.getName() ? newFood : food
            );
          }
        );
    }

    const deleteFood = (foodName) => {
        const currentFood = foods.find(food => food.getName() === foodName);
        const newFood = new Food(
            currentFood.getImage(),
            currentFood.getName(),
            currentFood.getCategory(),
            currentFood.getPrice()
        );

        setFoods((prevFoods) => {
            return prevFoods.map(food =>
              food.getName() === newFood.getName() ? newFood : food
            );
          }
        );
    }

    const clearFood = () => {
        setFoods(foodItems);
        setOrderActive(false);
    }

    const filteredFoods = foods.filter((food) => 
        food.getQuantity() > 0
    );

    return (
        <div className="app">
            <div className="food-content">
                <h1 className="content-title">Desserts</h1>
                <FoodList>
                    {
                        foods.map( (food) => (
                            <FoodCard
                                key={food.name}
                                item={food}
                                incrementFood={incrementFood}
                                decrementFood={decrementFood}
                            />
                        ))
                    }
                </FoodList>
            </div>
            <CartList
                setOrderActive={setOrderActive}
            >
                {
                    filteredFoods.map( (item) => (
                        <CartItem
                            key={item.name}
                            item={item}
                            deleteFood={deleteFood}
                        />
                    ))
                }
            </CartList>
            {orderActive && (
                <OrderList
                    clearFood={clearFood}
                >
                    {
                        filteredFoods.map( (item) => (
                            <OrderItem
                                key={item.name}
                                item={item}
                            />
                        ))
                    }
                </OrderList>
                )
            }
        </div>
    )
}

export {App};