"use strict";

//object for price of pizza
var pizzaPrice = {
    size12: 11,
    size14: 13,
    size16: 16,
    stuffed: 3,
    pan: 2,
    doubleSauce: 1.5,
    doubleCheese: 1.5,
    topping:1.5
};

//for shopping cart
function cart() {
    this.totalCost = 0;
    this.items = [];
}

//for price and quantity
function foodItem() {
    this.price;
    this.qty;
}

//calculation for cost of item ordered
foodItem.prototype.calcItemCost = function () {
    return this.price * this.qty;
};

//function for calculation for shopping cart total
cart.prototype.calcCartTotal = function () {
    var cartTotal = 0;
    this.items.forEach(function (item) {//loop through items
        cartTotal += item.calcItemCost();//add calculated item from function to the total
    });
    this.totalCost = cartTotal;//set total to updated cart total
    return this.totalCost;
};

//function to add item to shopping cart
foodItem.prototype.addToCart = function (cart) {
    cart.items.push(this);//adding object to items array
};

//function to delete from shopping cart
foodItem.prototype.removeFromCart = function (cart) {
    //loop through items array
    for (var i = 0; i < cart.items.length; i++) {
        if (this === cart.items[i]) {//test each item
            cart.items.splice(i, 1);//remove 1 item object at a time
            break;
        }
    }
};
//constructors for pizza and toppings on pizzas
function pizza() {
    this.size;
    this.crust;
    this.doubleSauce;
    this.doubleCheese;
    this.toppings = [];
}
function topping() {
    this.name;
    this.side;
}

//use constructors to create new object
pizza.prototype = new foodItem();
topping.prototype = new foodItem();

//function to add topping to pizza
pizza.prototype.addTopping = function (topping) {
    this.toppings.push(topping);//add parameter to constructor
};

//function to calculate pizza price order
pizza.prototype.calcPizzaPrice = function () {
    //compare pizza constructor size attributes,price is object from foodItem()
    if (this.size === "12") {
        this.price = pizzaPrice.size12;
    }
    else if (this.size === "14") {
        this.price = pizzaPrice.size14;
    }
    else {
        this.price = pizzaPrice.size16;
    }
    //increasing prices
    if (this.crust === "stuffed") {
        this.price += pizzaPrice.stuffed;
    }
    else if (this.crust === "pan") {
        this.price += pizzaPrice.pan;
    }
    if (this.doubleSauce) {
        this.price += pizzaPrice.doubleSauce;
    }
    if (this.doubleCheese) {
        this.price += pizzaPrice.doubleCheese;
    }
    //loop through toppings array property for pizza
    for (var i = 0; i < this.toppings.length; i++) {
        //increase price qty from foodItem() * pizzaPrice object topping attribute
        this.price += this.toppings[i].qty * pizzaPrice.topping;
    }
    return this.price;
};

//run function after browser reloads
window.addEventListener("load", function () {
    //get variables from HTML page
    var pizzaPreviewBox = document.getElementById("previewBox");
    var pizzaSummary = document.getElementById("pizzaSummary");
    var pizzaSizeBox = document.getElementById("pizzaSize");
    var pizzaCrustBox = document.getElementById("pizzaCrust");
    var pizzaDoubleSauceBox = document.getElementById("doubleSauce");
    var pizzaDoubleCheeseBox = document.getElementById("doubleCheese");
    var toppingOptions = document.querySelectorAll("input.topping");
    var pizzaQuantityBox = document.getElementById("pizzaQuantity");
    var addToCartButton = document.getElementById("addToCart");
    var cartTableBody = document.querySelector("table#cartTable tbody");
    var cartTotalBox = document.getElementById("cartTotal");

    //set variables for change or click then call function
    pizzaSizeBox.onchange = drawPizza;
    pizzaCrustBox.onchange = drawPizza;
    pizzaDoubleSauceBox.onclick = drawPizza;
    pizzaDoubleCheeseBox.onclick = drawPizza;
    pizzaQuantityBox.onchange = drawPizza;

    //loop through radio buttons for Toppings to paint pizza image
    for (var i = 0; i < toppingOptions.length; i++) {
        toppingOptions[i].onclick = drawPizza;
    }

    //create new oject for cart
    var myCart = new cart();

    //after Add To Button clicked call function 
    addToCartButton.onclick = addPizzaToCart;

    //function to build pizza to order
    function buildPizza(newPizza) {
        //set attributes from pizza function to HTML variables
        newPizza.qty = pizzaQuantityBox.selectedValue();//select menu
        newPizza.size = pizzaSizeBox.selectedValue();//select menu
        newPizza.crust = pizzaCrustBox.selectedValue();//select menu
        newPizza.doubleSauce = pizzaDoubleSauceBox.checked;//check box
        newPizza.doubleCheese = pizzaDoubleCheeseBox.checked;//check box

        //create variable for radio option buttons checked
        var checkedToppings = document.querySelectorAll("input.topping:checked");

        //test whether the radio option button value is not equal to "none"
        for (var i = 0; i < checkedToppings.length; i++) {
            if (checkedToppings[i].value !== "none") {
                var myTopping = new topping();//new object for topping
                //set new object topping attributes to name and value of radio buttons
                myTopping.name = checkedToppings[i].name;
                myTopping.side = checkedToppings[i].value;

                //if full value checked is a whole pizza
                if (checkedToppings[i].value === "full") {
                    myTopping.qty = 1;//qty from topping.prototype = new foodItem();
                }
                //otherwide if half checked is 1/2 pizza
                else {
                    myTopping.qty = .5;//qty from topping.prototype = new foodItem();
                }
                //call pizza function to pizza object passing new topping object
                newPizza.addTopping(myTopping);
            }   
        }
    }//buildPizza function

    //function to add pizza to shopping cart to order
    function addPizzaToCart() {
        var myPizza = new pizza();//new pizza object
        buildPizza(myPizza);//call function passing new pizza object
        myPizza.addToCart(myCart);//call function to pizza object passing new cart object

        //create child table row tag then add to table#cartTable tbody
        var newItemRow = document.createElement("tr");
        cartTableBody.appendChild(newItemRow);

        //create child table data cell,set text to display pizza description under My Pizza,add child tag to tr tag
        var summaryCell = document.createElement("td");
        summaryCell.textContent = pizzaSummary.textContent;
        newItemRow.appendChild(summaryCell);

        //create child table data cell,set text to qty from pizza object,add child tag to tr tag
        var qtyCell = document.createElement("td");
        qtyCell.textContent = myPizza.qty;
        newItemRow.appendChild(qtyCell);

        //create child table data cell,set text Total calling function in US $ to pizza object,add child to tr tag
        var priceCell = document.createElement("td");
        priceCell.textContent = myPizza.calcPizzaPrice().toLocaleString('en-US', { style: "currency", currency: "USD" });
        newItemRow.appendChild(priceCell);

        //create child table data cell tag & input button to delete
        var removeCell = document.createElement("td");
        var removeButton = document.createElement("input");
        removeButton.value = "X";//set value for input button
        removeButton.type = "button";//set type to a button
        removeCell.appendChild(removeButton);//add input button to table data cell
        newItemRow.appendChild(removeCell);//add table data cell to tr tag

        //set TOTAL cart value to $ US by calling function to cart object
        cartTotalBox.value = myCart.calcCartTotal().toLocaleString('en-US', { style: "currency", currency: "USD" });
        console.log(myCart);

        //remove items from shopping cart by clicking the removeItem button
        removeButton.onclick = function () {
            myPizza.removeFromCart(myCart);
            cartTableBody.removeChild(newItemRow);
            cartTotalBox.value = myCart.calcCartTotal().toLocaleString('en-US', { style: "currency", currency: "USD" });
            console.log(myCart);
        };
        //call function
        resetDrawPizza();
    }   

    //function to draw pizza image
    function drawPizza() {
      //delete child tags from the pizza box for viewing
      pizzaPreviewBox.removeChildren();

      //display under MY PIZZA the select menu values
      var pizzaDescription = "";
      pizzaDescription += pizzaSizeBox.selectedValue() + '" pizza ';
      pizzaDescription += pizzaCrustBox.selectedValue() + ", ";

      //if check box checked for double sauce add img to draw and text
      if (pizzaDoubleSauceBox.checked) {
         //create image for pizza sauce,set its src to png image
         var sauceImg = document.createElement("img");
         sauceImg.src = "rb_doublesauce.png";
         pizzaPreviewBox.appendChild(sauceImg);//add child tag to div#pizzaBox
         pizzaDescription += "double sauce, ";//add text to empty string
      }

      //if check box checked for double cheese add img to draw and text
      if (pizzaDoubleCheeseBox.checked) {
         ///create image for pizza cheese,set its src to png image
         var cheeseImg = document.createElement("img");
         cheeseImg.src = "rb_doublecheese.png";
         pizzaPreviewBox.appendChild(cheeseImg);//add child tag to div#pizzaBox
         pizzaDescription += "double cheese, ";//add text to empty string
      } 

      //get all radio buttons checked for pizza toppings
      var checkedToppings = document.querySelectorAll("input.topping:checked");

      //loop through checked radio buttons
      for (var i = 0; i < checkedToppings.length; i++) {
          //if not checked at default to none
         if (checkedToppings[i].value !== "none") {
            //display name of radio button (value) under MY PIZZA
            pizzaDescription += checkedToppings[i].name + "(" + checkedToppings[i].value + "), ";

            //create topping img for pizza and set its src attribute to png image
            var toppingImage = document.createElement("img");
            toppingImage.src = "rb_" + checkedToppings[i].name + ".png";
            pizzaPreviewBox.appendChild(toppingImage); //add child tag to div#pizzaBox                                 

             //if left radio button value checked clip img to show on left side of pizza
            if (checkedToppings[i].value === "left") {
               toppingImage.style.clip = "rect(0px, 150px, 300px, 0px)";//x1,y1,x2,y2
            }
             //if right radio button value checked clip img to show on right side of pizza
            else if (checkedToppings[i].value === "right") {
               toppingImage.style.clip = "rect(0px, 300px, 300px, 150px)";//x1,y1,x2,y2
            }
         }
      }
      //display pizza description under MY PIZZA
      pizzaSummary.textContent = pizzaDescription;
    }//end of drawPizza function

    //set pizza to default image
   function resetDrawPizza() {
      var noTopping = document.querySelectorAll("input.topping[value='none']");
      pizzaSizeBox.selectedIndex = 1;
      pizzaCrustBox.selectedIndex = 0;
      pizzaDoubleSauceBox.checked = false;//uncheck
      pizzaDoubleCheeseBox.checked = false;//uncheck

      //loop through radio buttons of a none value selected
      for (var i = 0; i < noTopping.length; i++) {
         noTopping[i].checked = true;//checked for none
       }
       //reset to pizza description at default under MY PIZZA
      pizzaSummary.textContent = '14" pizza, thin';
      pizzaPreviewBox.removeChildren();//delete child tags from div#pizzaBox
      pizzaQuantityBox.selectedIndex = 0;//reset select value
   }
});

/* Method added to any DOM element that removes all child nodes of element */
HTMLElement.prototype.removeChildren = function() {
   while (this.firstChild) {
      this.removeChild(this.firstChild);
   }   
};

/* Method added to the select element to return the value of the selected option */
HTMLSelectElement.prototype.selectedValue = function() {
   var sIndex = this.selectedIndex;
   return this.options[sIndex].value;
};

