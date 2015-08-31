#### General Questions:

* What did you learn yesterday/this week?
Quik sort, angular framework.
* What excites or interests you about coding?
Potential to build new things that have not been built before.
* What is a recent technical challenge you experienced and how did you solve it?
Homework is an ongoing technical challenge.  Solve most of it by doing research or workign with school mates.
* What UI, Security, Performance, SEO, Maintainability or Technology considerations do you make while building a web application or site?
Trying to implement secure login.  Now that we now how to use Facebook login will definetely implement that.  Also try to structure code so that is built based on small classes so that when there is refactoring it will be easy to perform.
* Talk about your preferred development environment.
I used Visual Studio for a long time and really like a lot of its features.  The ability to put break points instead of console log is very nice. 
* Which version control systems are you familiar with?
Git, TFS and Source Depot
* Can you describe your workflow when you create a web page?
Wireframe it.  Lay out views, build controllers.  Call pages in browser to validate visibility and route calling.  Add controller functionality.  Add UI functionality.
* If you have 5 different stylesheets, how would you best integrate them into the site?
Depends, could integrate all into one or based on features keep them separate and named accordignly.
* Can you describe the difference between progressive enhancement and graceful degradation?
Former is adding features to make a product better while maintaining or improving performance and usability.  Latter is adding more stuff while slowing down performance as well as usability.
* Describe how you would create a simple slideshow page.
* If you could master one technology this year, what would it be?
Tought one, I love both web and mobile development.  Javascript would be my langauge of choice.
* Explain the importance of standards and standards bodies.
Standards talk about how things should look (e.g. html pages in browser).  Bodies are the groups of people that talk about this.
* Explain some of the pros and cons for CSS animations versus JavaScript animations.
CSS is used more for smaller, UI elements where the animation does not need to be tracked. (e.g. opening a dropdown).  Use Javascript for more complex stuff like tracking element positions.  Or to start and stop elements.  (e.g. game, etc).  You can also use CSS animation to do the movement and let Javascritp do the event handling.

#### Ruby and Rails related
*  What are ruby gems?
Pieces of software that allow you to add functionality to your project.
* What is the difference between a symbol and a string?
String value can be changed.  Symbol can not.
* What is the difference between a class method and an instance method?
Class method is used on the class while an instance method can only be used on the instance of the class.  e.g Class Person.  Person.walk() vs Joe.walk()
* What is a range?
A Range represents an interval—a set of values with a beginning and an end. 
* In ruby, what does attr_accessor do? 
Allows you to set and get attributes.
* What is the purpose of environment.rb and application.rb file?
Environment.rb sets the different confugurations under which the applciaiton will run (debug, production, etc).  Application.rb is the place where you put your initialization code. 
* How can you define a constant?
in CAPS (e.g. VAR test = 10)
* In rails what does attr_accessible do?
attr_accessible specifies a whitelist of attributes that are allowed to be updated in bulk
* What is the purpose of yield?
Allows you to inject blocks of code into a function
* Where do you store your API keys?
Config file
* How do I send parameters through a url?
Send them in the link_to (e.g. <%= link_to "Add Product", '/pages/product?param1=value1&param2=value2' %>)

* Explain MVC
Model View COntroller design where the Model handles the data (CRUD), Controller handles business logic and View displays the data.  Controller acts as the union between Model and View
* What is a before_filter? When would you use it?
Keeps your controller actions clean by moving logic about authentication, authorization, or state of the resource out of the main method
* What do controllers do in rails?
Handle logic passed to model and view.
* What is RESTful routing?
Is accessing pages with a combination of verb and url.
* What is a polymorphic association?
It’s where an ActiveRecord model can potentially belong to more than one other kind of model record
* What are params?
params values can come from the query string of a GET request, or the form data of a POST request, but there's also a third place they can come from: The path of the URL.
* What is the difference between unit tests and functional tests?
Unit tests are written by developer to test small individual pieces of code.  Functional test are done by QA to validate the completed functionality of a certain feature.

#### HTML Questions:

* What does a `doctype` do?
Initializes html page by sitting at root of page.
* What's the difference between HTML and XHTML?
Is a combinaton of xml and html
* What are `data-` attributes good for?
The data attribute lets you assign custom data to an element
* Describe the difference between a `cookie`, `sessionStorage` and `localStorage`.
Session storage long lasts for the duration of the browser session.  Localstorage is used when the data needs to be persisted farther than the session.  Cookies is data stored in the browser.
* Why is it generally a good idea to position CSS `<link>`s between `<head></head>` and JS `<script>`s just before `</body>`? Do you know any exceptions?
CSS first so that all styling is loaded and page knows what is needed to be rendered.

#### CSS Questions:

* What is the difference between classes and ID's in CSS?
Class includes a set of elements, id is per element.
* What's the difference between "resetting" and "normalizing" CSS? Which would you choose, and why?
CSS resets aim to remove all built-in browser styling.  Normalize CSS aims to make built-in browser styling consistent across browsers.  I woud choose normalize for consistency sake.
* Describe Floats and how they work.
The float CSS property specifies that an element should be taken from the normal flow and placed along the left or right side of its container, where text and inline elements will wrap around it
* Describe z-index and how stacking context is formed.
The z-index property in CSS controls the vertical stacking order of elements that overlap.
* Have you ever used a grid system, and if so, what do you prefer?
I use bootrap grid system.   I like it because is easy to layout things.
* Have you used or implemented media queries or mobile specific layouts/CSS?
Ued media queries to make my project site responsive.
* How do you optimize your webpages for print?
??TO DO
* What are some of the "gotchas" for writing efficient CSS?
Organize, not repeat, scope all elements with same css needs
* What are the advantages/disadvantages of using CSS preprocessors?
* Describe what you like and dislike about the CSS preprocessors you have used.
I used Bourbon in the past and had issues beacuse of a mix of bootstrap and Bourbon so decided to stick with bootstrap.
* How would you implement a web design comp that uses non-standard fonts?
* Explain how a browser determines what elements match a CSS selector.
By getting a list of elements to be displayed and then matching them to the css file and then rendering.
* Explain your understanding of the box model and how you would tell the browser in CSS to render your layout in different box models.
Boc model represents a box that wraps around HTML elements, and it consists of: margins, borders, padding, and the actual content.  To alter it we use the css box-sizing property
* What does ```* { box-sizing: border-box; }``` do? What are its advantages?
IE6 Quirks mode: if you set a width, and add paddings and borders, the total width won’t change. It’s the innerwidth that’ll adapt.  Advantages I'll have to dig.
* List as many values for the display property that you can remember.
Block, inline.
* What's the difference between inline and inline-block?
inline allows for elements next to it.  Inline block it does not.
* What's the difference between a relative, fixed, absolute and statically positioned element?
Static is the default value. The element stays in the flow.
Relative is almost like static, but with some tweaks. It also stays in the flow (which is the magic part), but you can use left/right/top/bottom to actually offset the element, without the other elements being aware of it! It’s like movement in disguise. Also: you can use the z-index. And also (very important): it acts like a point of reference for absolute-positioned child elements.
Absolute takes the element out of the flow. So the other elements act like it’s not there. That’s why absolute elements appear on top. Then the first positioned parent acts like a reference point: you can use left/right and top/bottom to position the element, like on a grid axis. One trick is to provide values for the 4 properties, keep height and width to auto, and you have a perfect flexible overlay!
Fixed positioning is like absolute, but the reference is the body, or the viewport actually. Usually used for headers, but is also perfect for overlays, because fixed elements don’t scroll.
* The 'C' in CSS stands for Cascading.  How is priority determined in assigning styles (a few examples)?  How can you use this system to your advantage?
http://blog.snowfir.com/en/?p=226
* What existing CSS frameworks have you used locally, or in production? How would you change/improve them?
Bootstrap.
Bourbon.  In learning mode so not trying to improve.
* Have you played around with the new CSS Flexbox or Grid specs?
N/A
* Have you ever worked with retina graphics? If so, when and what techniques did you use?
N/A

#### JS Questions:

* Explain event delegation

* Explain how `this` works in JavaScript
"This" is the receiver node/object of the action committed by the user. Outside of a function, it refers to the window global object.
* Explain how prototypal inheritance works
http://javascript.info/tutorial/inheritance
* Why is it called a Ternary expression, what does the word "Ternary" indicate?
Becyase the if an else condition all exists in one line.  Called ternary because the decision on the statement is based on 3 factors.
* What's the difference between a variable that is: `null`, `undefined` or `undeclared`?
A variable is undeclared when it does not use the var keyword.
Something is undefined when it hasn't been defined yet. If you call a variable or function without having actually created it yet the parser will give you an not defined error.
null is a variable that is defined to have a null value.
* How would you go about checking for any of these states?
First and 2 are compiler errors.  Last one you can do a check to validate if the values is null.  If not then proceed with instructions.
* What is a closure, and how/why would you use one?
http://lucybain.com/blog/2014/closures/
* What's a typical use case for anonymous functions?
* Difference between: `function Person(){}`, `var person = Person()`, and `var person = new Person()`?
* What's the difference between `.call` and `.apply`?
* Explain `Function.prototype.bind`.
* What's the difference between feature detection, feature inference, and using the User Agent string?
* Explain AJAX in as much detail as possible.
* Have you ever used JavaScript templating?
* If so, what libraries have you used?
* Explain "hoisting".
* Describe event bubbling.
* What's the difference between an "attribute" and a "property"?
* Why is extending built-in JavaScript objects not a good idea?
* What is the difference between `==` and `===`?
* Explain the same-origin policy with regards to JavaScript.
* What is the extent of your experience with Promises and/or their polyfills?
* What are the pros and cons of using Promises instead of callbacks?
* What tools and techniques do you use debugging Javascript code?
* What language constructions do you use for iterating over object properties and array items?

#### Testing Questions:

* What are some advantages/disadvantages to testing your code?

* What tools would you use to test your code's functionality?
* What is the difference between a unit test and a functional/integration test?
* What is the purpose of a code style linting tool?