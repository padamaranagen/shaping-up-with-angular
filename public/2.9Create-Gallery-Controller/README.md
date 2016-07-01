### 2.9 Creating Gallery Controller

1. Let's start with a Controller, just like last time. Call it GalleryController.
2. Initialize a current property of GalleryController with a value of 0.
3. Add a method to GalleryController called setCurrent that accepts a value and assigns it to current. If no value is passed in, set current to 0.
4. Attach GalleryController to the .gallery element that wraps our gallery; use the alias gallery.
5. Change the ng-src directive on the main image to use the current property. You'll need to access the current-th product image.