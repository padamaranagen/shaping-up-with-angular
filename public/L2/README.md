### Level2- Built-in Directives 


#### Tasks

```
1. Use an Angular filter to display the price as a currency.
```

```
1. We want to display the first full-sized image for each product. Can you figure out how?
```

```
1. Make the li's repeat for each image in the image array. Use the variable image as your identifier.
2. Now that we have image available from our ng-repeat let's replace the product.images[0] with it.
```

```
1. Use the ng-show directive to make sure our image gallery is only displayed if a product has images.
```

```
1. Create a controller named TabController.
2. An empty Controller isn't much use. Do you remember why we needed a Controller at all? That's right, we need to initialize the tab property. Go ahead and add that property now, setting it to 1.
3. In order to set the current tab, we'll need a setTab method to use in our HTML. It should set the tab property of TabController to a value passed in.
4. We've got a setTab method. Now we need an isSet method that accepts a value and returns whether that value matches this.tab.
```

```
1. Attach the TabController to the <section> element with the .tab class. Don't forget to also add an alias.
2. Trigger the setTab method when a link inside a tab is clicked. Add this to each of the tab links. Pass in the number of the tab, in this case 1, 2 or 3.
3. Use the isSet method to show the corresponding tab. You'll need to add a directive to each of the <div> elements in .tab.
4. Add the active class to the correct <li> when each tab is clicked. You'll need to add a directive to each <li> in .nav.
5. Within the Description tab, output the product's description within the <blockquote> element.
6. Within the Specs tab, output the product's shine value. It should look something like this within the <blockquote> element: "Shine: 4".
```