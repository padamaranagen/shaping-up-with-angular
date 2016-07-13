### Level3- Forms


#### Tasks
```
1. You need to create multiple li's for each review that exists.
2. Set the blockquote stars ( strong tag) to the review stars.
3. Add the review body between the strong & cite tags.
4. Set the cite to the review author.
```

```
1. Use ng-model for review.stars select form field.
2. Use ng-model for review.body for the forms textarea.
3. Use ng-model for review.author – the email field.
```

```
1. In the strong tag, before Stars, put in the right expression to display review.stars. Keep the space prior to Stars
2. On the blank line with no tags put in the right expression to display review.body
3. In the cite tag, immediately after the -, put in the right expression to display review.author.
```

```
1. Create a new controller called ReviewController.
2. Set our review variable to an empty object when the ReviewController is created.
3. Create an empty function named addReview in your ReviewController.
4. We'll pass in the product we want to review to our addReview function. Edit your function declaration to accept a product parameter.
5. When addReview is called with a product, it should add the review from the controller to the passed-in product's reviews array. Implement this functionality in the addReview method.
6. Reset the review to an empty object after it's been added to product.reviews.
```