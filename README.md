AngularJS is a great JavaScript framework that has some very compelling features for not only developers, but designers as well!

AngularJS is a new, powerful, client-side technology that provides a way of accomplishing really powerful things in a way that embraces and extends HTML, CSS and JavaScript, while shoring up some of its glaring deficiencies. It is what HTML would have been, had it been built for dynamic content.

### Feature 1: Two Way Data-Binding

Think of your model as the single-source-of-truth for your application. Your model is where you go to to read or update anything in your application.

Data-binding is probably the coolest and most useful feature in AngularJS. It will save you from writing a considerable amount of boilerplate code. A typical web application may contain up to 80% of its code base, dedicated to traversing, manipulating, and listening to the DOM. Data-binding makes this code disappear, so you can focus on your application.

Think of your model as the single-source-of-truth for your application. Your model is where you go to to read or update anything in your application. The data-binding directives provide a projection of your model to the application view. This projection is seamless, and occurs without any effort from you.

Traditionally, when the model changes, the developer is responsible for manually manipulating the DOM elements and attributes to reflect these changes. This is a two-way street. In one direction, the model changes drive change in DOM elements. In the other, DOM element changes necessitate changes in the model. This is further complicated by user interaction, since the developer is then responsible for interpreting the interactions, merging them into a model, and updating the view. This is a very manual and cumbersome process, which becomes difficult to control, as an application grows in size and complexity.

There must be a better way! AngularJS' two-way data-binding handles the synchronization between the DOM and the model, and vice versa.

Here is a simple example, which demonstrates how to bind an input value to an <h1> element.
```html
<!doctype html>
<html ng-app>
  <head>
    <script src="http://code.angularjs.org/angular-1.0.0rc10.min.js"></script>
  </head>
  <body>
    <div>
      <label>Name:</label>
      <input type="text" ng-model="yourName" placeholder="Enter a name here">
      <hr>
      <h1>Hello, {{yourName}}!</h1>
    </div>
  </body>
</html>
```
This is extremely simple to set up, and almost magical…

### Feature 2: Templates

It's important to realize that at no point does AngularJS manipulate the template as strings. It's all the browser DOM.

In AngularJS, a template is just plain-old-HTML. The HTML vocabulary is extended, to contain instructions on how the model should be projected into the view.

The HTML templates are parsed by the browser into the DOM. The DOM then becomes the input to the AngularJS compiler. AngularJS traverses the DOM template for rendering instructions, which are called directives. Collectively, the directives are responsible for setting up the data-binding for your application view.

It is important to realize that at no point does AngularJS manipulate the template as strings. The input to AngularJS is browser DOM and not an HTML string. The data-bindings are DOM transformations, not string concatenations or innerHTML changes. Using the DOM as the input, rather than strings, is the biggest differentiation AngularJS has from its sibling frameworks. Using the DOM is what allows you to extend the directive vocabulary and build your own directives, or even abstract them into reusable components!

One of the greatest advantages to this approach is that it creates a tight workflow between designers and developers. Designers can mark up their HTML as they normally would, and then developers take the baton and hook in functionality, via bindings with very little effort.

Here is an example where I am using the ng-repeat directive to loop over the images array and populate what is essentially an img template.

function AlbumCtrl($scope) { </br>
	scope.images = [</br>
		{"thumbnail":"img/image_01.png", "description":"Image 01 description"},</br>
		{"thumbnail":"img/image_02.png", "description":"Image 02 description"},</br>
		{"thumbnail":"img/image_03.png", "description":"Image 03 description"},</br>
		{"thumbnail":"img/image_04.png", "description":"Image 04 description"},</br>
		{"thumbnail":"img/image_05.png", "description":"Image 05 description"}</br>
	];</br>
}</br>
```html
<div ng-controller="AlbumCtrl">
  <ul>
    <li ng-repeat="image in images">
      <img ng-src="{{image.thumbnail}}" alt="{{image.description}}">
    </li>
  </ul>
</div>
```
It is also worth mentioning, as a side note, that AngularJS does not force you to learn a new syntax or extract your templates from your application.

### Feature 3: MVC

AngularJS incorporates the basic principles behind the original MVC software design pattern into how it builds client-side web applications.

The MVC or Model-View-Controller pattern means a lot of different things to different people. AngularJS does not implement MVC in the traditional sense, but rather something closer to MVVM (Model-View-ViewModel).

##### The Model
The model is simply the data in the application. The model is just plain old JavaScript objects. There is no need to inherit from framework classes, wrap it in proxy objects, or use special getter/setter methods to access it. The fact that we are dealing with vanilla JavaScript is a really nice feature, which cuts down on the application boilerplate.

##### The ViewModel
A viewmodel is an object that provides specific data and methods to maintain specific views.

The viewmodel is the $scope object that lives within the AngularJS application. $scope is just a simple JavaScript object with a small API designed to detect and broadcast changes to its state.

##### The Controller
The controller is responsible for setting initial state and augmenting $scope with methods to control behavior. It is worth noting that the controller does not store state and does not interact with remote services.

##### The View
The view is the HTML that exists after AngularJS has parsed and compiled the HTML to include rendered markup and bindings.

This division creates a solid foundation to architect your application. The $scope has a reference to the data, the controller defines behavior, and the view handles the layout and handing off interaction to the controller to respond accordingly.

### Feature 4: Dependency Injection

AngularJS has a built-in dependency injection subsystem that helps the developer by making the application easier to develop, understand, and test.

Dependency Injection (DI) allows you to ask for your dependencies, rather than having to go look for them or make them yourself. Think of it as a way of saying "Hey I need X', and the DI is responsible for creating and providing it for you.

To gain access to core AngularJS services, it is simply a matter of adding that service as a parameter; AngularJS will detect that you need that service and provide an instance for you.

  function EditCtrl($scope, $location, $routeParams) {</br>
       // Something clever here...</br>
  }</br>
You are also able to define your own custom services and make those available for injection as well.

  angular.</br>
      module('MyServiceModule', []).</br>
      factory('notify', ['$window', function (win) {</br>
      return function (msg) {</br>
          win.alert(msg);</br>
      };</br>
  }]);</br>

  function myController(scope, notifyService) {</br>
      scope.callNotify = function (msg) {</br>
          notifyService(msg);</br>
      };</br>
  }</br>

  myController.$inject = ['$scope', 'notify'];</br>

### Feature 5: Directives

Directives are my personal favorite feature of AngularJS. Have you ever wished that your browser would do new tricks for you? Well, now it can! This is one of my favorite parts of AngularJS. It is also probably the most challenging aspect of AngularJS.

Directives can be used to create custom HTML tags that serve as new, custom widgets. They can also be used to "decorate" elements with behavior and manipulate DOM attributes in interesting ways.

Here is a simple example of a directive that listens for an event and updates its $scope, accordingly.

  myModule.directive('myComponent', function(mySharedService) {</br>
      return {</br>
          restrict: 'E',</br>
          controller: function($scope, $attrs, mySharedService) {</br>
              $scope.$on('handleBroadcast', function() {</br>
                  $scope.message = 'Directive: ' + mySharedService.message;</br>
              });</br>
          },</br>
          replace: true,</br>
          template: '<input>'</br>
      };</br>
  });</br>