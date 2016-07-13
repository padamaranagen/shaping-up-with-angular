### Level5- Services


#### MODULE INCEPTION

* Dependencies
* Refactoring into a Module

#### SMARTER CUSTOM DIRECTIVES

* Services
* Built-in Angular Services


#### Tasks

```
1. Create a new Module named store-directives to encapsulate our store Directives.
2. Move the Directive definitions from app.js into products.js.
3. Give gemStore Module access to the directives by adding a dependency to gemStore's definition.
4. Link in the new products.js file.
```

```
1. Pass our store controller the $http Service.
2. get the store-products.json using the $http Service.
3. Attach a success to our get call.
4. Name the first parameter of the success function data.
5. Give our StoreController access to the products by setting products equal to the data given to us with the http service's success promise.
```