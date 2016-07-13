### Level4- Custom Directives

#### TEMPLATING WITH CUSTOM DIRECTIVES

##### Directives

* Refactoring Description Tab
* Creating an Element Directive
* Creating an Attribute Directive

#### SMARTER CUSTOM DIRECTIVES

* Directive Controllers
* Refactoring Product Tabs
* Refactoring Product Gallery

#### Tasks

```
1. Separate out our description tab into product-description.html.
2. Include product-description.html inside the description tab.
```

```
1. Create an Element Directive for our Description div that includes the product-description.html.
2. Include the file on the page using a custom directive tag instead of ng-include.
```

```
1. Move the contents inside the specs div to the product-specs.html.
2. Create a new attribute directive for our specs tag called productSpecs. Have it use our new product-specs.html template.
3. In index.html, use your new attribute directive to show the product specs.
```

```
1. Create an element directive called productTabs.
2. Tell your new directive to use the product-tabs.html template with the templateUrl attribute.
3. Give our productTabs directive all the tab functionality that is currently inside our TabController. Make sure that you do not delete the TabController yet. We don't want to break the site.
4. Add the controllerAs attribute to your directive setting it to tab so the directive knows what all the references to tab in product-tabs.html are.
5. Put the tabs section inside of the provided product-tabs.html. Remove the ng-controller from the section inside the file once moved.
6. Now remove the product tabs section from index.html and the TabController from app.js.
7. Use our new productTabs directive where the tabs section used to be in our index.html.
```

```
1. Create an element directive called productGallery.
2. Tell your new directive to use the product-gallery.html template with the templateUrl attribute.
3. Give our productGallery directive all the gallery functionality that is currently inside our GalleryController. Make sure that you do not delete the GalleryController yet. We don't want to break the site.
4. Add the controllerAs attribute to your directive setting it to gallery so the directive knows what all the references to gallery in product-gallery.html are.
5. Put the gallery div inside of the provided product-gallery.html. Remove the ng-controller from the div inside the file once moved.
6. Now remove the image gallery div from index.html and the GalleryController from app.js.
7. Use our new productGallery directive where the gallery div used to be in our index.html.
```