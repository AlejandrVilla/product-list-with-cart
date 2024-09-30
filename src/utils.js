class Food{
    constructor(
        image,
        name,
        category,
        price   
    ){
        this.image = image;
        this.name = name;
        this.category = category;
        this.price = price;
        this.quantity = 0;
    }

    getName(){
        return this.name;
    }

    getCategory(){
        return this.category;
    }

    getPrice(){
        return this.price;
    }

    getImage(){
        return this.image;
    }

    getQuantity(){
        return this.quantity;
    }

    setQuantity(newQ){
        this.quantity = newQ;
    }
}

export default Food;