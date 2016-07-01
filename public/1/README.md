### Task 1

1. Add a controller named StoreController to our gemStore application.
2. Attach the StoreController to the ``` <body> ``` tag. Be sure to alias it as store.
3. In app.js, we've added a gem object to represent one of the products in our gemStore. Assign it to the product property of StoreController so we can use them in the page.
4. Display the name of the product inside the ``` <h3>``` tag.
5. Display the price of the product inside the``` <em> ``` tag.

### Task 2

1. Use a directive to ensure that we can only see the "Add to Cart" button if the canPurchase property is true.
2. Our first gem is so popular that we've run out of stock already! Well, Flatlander gems are pretty rare, so it shouldn't be a big surprise. Luckily there is a soldOut property to our gem. When a gem is soldOut, hide the .product element.

### Task 3

1. In the app.js file we changed things up a little with a new gems array. Assign gems to a products property inside StoreController.
2. You know how to display all the products, don't you? Use the correct directive to display all the products in product row divs.
