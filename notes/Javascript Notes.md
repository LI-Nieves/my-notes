---
id: wior0xau33vb8uns7mrr26a
title: Javascript Notes
desc: ''
updated: 1709541795499
created: 1709541770993
---
# Notes from [W3Schools](https://www.w3schools.com/js/default.asp)

## Introduction
- JS is used to program the client-side behavior of web pages
    - Lightweight, interpreted, just-in-time, scripting
- JS can change HTML content
    - This "finds" an HTML element with `id="demo"` and changes the element content (`innerHTML`) to `"Hello JavaScript"`

    ```html
    <!DOCTYPE html>
    <html>
    <body>

    <h2>What Can JavaScript Do?</h2>

    <p id="demo">JavaScript can change HTML content.</p>

    <button type="button" onclick='document.getElementById("demo").innerHTML = "Hello JavaScript!"'>Click Me!</button>

    </body>
    </html>
    ```
    - JS can change HTML attribute values 

    ```html
    <!DOCTYPE html>
    <html>
    <body>

    <h2>What Can JavaScript Do?</h2>

    <p>JavaScript can change HTML attribute values.</p>

    <p>In this case JavaScript changes the value of the src (source) attribute of an image.</p>

    <button onclick="document.getElementById('myImage').src='pic_bulbon.gif'">Turn on the light</button>

    <img id="myImage" src="pic_bulboff.gif" style="width:100px">

    <button onclick="document.getElementById('myImage').src='pic_bulboff.gif'">Turn off the light</button>

    </body>
    </html>
    ```
    - JS can change HTML styles (CSS)
    ```html
    <!DOCTYPE html>
    <html>
    <body>

    <h2>What Can JavaScript Do?</h2>

    <p id="demo">JavaScript can change the style of an HTML element.</p>

    <button type="button" onclick="document.getElementById('demo').style.fontSize='35px'">Click Me!</button>

    </body>
    </html> 
    ```
    - JS can hide HTML elements
    ```javascript
    document.getElementById("demo").style.display = "none";
    ```
    - JS can show HTML elements
    ```javascript
    document.getElementById("demo").style.display = "block";
    ```

## Where to put JavaScript
- In HTML, JS code is inserted between `<script>` and `</script>` tags
- Scripts can be inserted in the `<head>` and `<body>` sections of an HTML pages
- Scripts can also be placed in external files; put the name of the script file in the src attribute of a `<script>` tag:
    ```html
    <script src="myScript.js"></script>
    ```
    - Can be referenced with a full URL, a file path, or without any path

## Output
- Writing into HTML element with innerHTML
```html
<!DOCTYPE html>
<html>
    <body>
        <h1>My First Web Page</h1>
        <p>My First Paragraph</p>

        <p id="demo"></p>

        <script>
        document.getElementById("demo").innerHTML = 5 + 6;
        </script>
    </body>
</html>
```
- Writing into HTML output with `document.write()`
- Writing into an alert box with `window.alert()`
```html
<!DOCTYPE html>
<html>
    <body>
        <h1>My First Web Page</h1>
        <p>My first paragraph.</p>

        <script>
        alert(5 + 6);
        </script>
    </body>
</html>
```
- Writing into browser console with `console.log()`
```html
<!DOCTYPE html>
<html>
    <body>
        <h2>Activate Debugging</h2>

        <p>F12 on your keyboard will activate debugging.</p>
        <p>Then select "Console" in the debugger menu.</p>
        <p>Then click Run again.</p>

        <script>
            console.log(5 + 6);
        </script>
    </body>
</html>
``` 

## Key words
|Word|Description|
|---|---|
|var|declares a variable|
|let|declares a block variable|
|const|declares a block constant|
|if|marks a block of statements to be executed on a condition|
|switch|marks a block of statements to be executed in different cases|
|for|marks a block of statements to be executed in a loop|
|function|declares a function|
|return |exits a function|
|try |implements error handling to a block of statements|
|// |comment|
|/* */|multi-line comment|

## Variables
- JS Variables can be declared in 4 ways:
    - Automatically
    - Using `var`
    - Using `let`
    - Using `const`
- When to use which?
    - Always declare variables
    - Always use `const` when the type or value shouldn't be changed
    - Only use `let` if you can't use `const`
    - Only use `var` if you must support old browsers
- E.g., 
    ```javascript
    const price1 = 5;
    const price2 = 6;
    let total = price1 + price2;
    ```
- Differences

| |Scope|Redeclare|Reassign|Hoisted |Binds this|
|---|---|---|---|---|---|
|var|0|1|1|1|1|
|let|1|0|1|0|0|
|const|1|0|0|0|0|

## Data types
- 8 data types
    1. String
    2. Number
    3. Bigint
        used to store integer values that are too big to be represented by 64-bit floating point number
    4. Boolean
    5. Undefined
        used to empty a variable
        car = undefined;    // Value is undefined, type is undefined
    6. Null
    7. Symbol
    8. Object
        - Object
        ```javascript
        const person = {
            firstName: "John",
            lastName : "Doe",
            id       : 5566,
            fullName : function() { return this.firstName + " " + this.lastName; }
        };
        ```
        - Array
        ```javascript
        const cars = ["Saab", "Volvo", "BMW"];
        ```
        - Date
- JS evaluates expressions from left to right
    ```javascript
    let x = 16+4+"Volvo"
        20Volvo
    let x = "Volvo"+16+4
        Volvo164
    ```
- JS types are dynamic
    ```javascript
    let x;       // Now x is undefined
    x = 5;       // Now x is a Number
    x = "John";  // Now x is a String
    ```
- typeof
    ```javascript
    typeof 314            // Returns "number"
    typeof 3.14           // Returns "number"
    typeof (3)            // Returns "number"
    typeof (3 + 4)        // Returns "number"
    typeof ""             // Returns "string"
    typeof "John Doe"     // Returns "string"
    ```

## Functions
```javascript
function funcName(arg1,arg2) {
    return arg1+arg2
}
let output = funcName(1,2)
```

## if/else
```javascript
if (condition1) {
    //  block of code to be executed if condition1 is true
} else if (condition2) {
    //  block of code to be executed if the condition1 is false and condition2 is true
} else {
    //  block of code to be executed if the condition1 is false and condition2 is false
}
```

## Loops
- basic for loop
    ```javascript
    for (let i = 0; i < cars.length; i++) {
        text += cars[i] + "<br>";
    }
    ```
- for in loops through the properties of an Object
    ```javascript
    const person = {fname:"John", lname:"Doe", age:25};

    let text = "";
    for (let x in person) {
        text += person[x];
    }
    ```
- forEach() calls a function (a callback function) once for each array element
    ```javascript
    const numbers = [45, 4, 9, 16, 25];

    let txt = "";
    numbers.forEach(myFunction);

    function myFunction(value, index, array) {
        txt += value;
    }
    ```
- for of statement loops through the values of an iterable object
    ```javascript
    const cars = ["BMW", "Volvo", "Mini"];

    let text = "";
    for (let x of cars) {
        text += x;
    }
    ```
- basic while loop
    ```javascript
    while (i < 10) {
        text += "The number is " + i;
        i++;
    }
    ```
- basic do-while loop
    ```javascript
    do {
        text += "The number is " + i;
        i++;
    } while (i < 10);
    ```
*************************************************************************************
# Notes from [mdn web docs_](https://developer.mozilla.org/en-US/docs/Learn/JavaScript)

## APIs
- Different kinds of Browser APIs:
    - DOM API
        - Allows you to manipulate HTML and CSS (e.g., creates HTML, dynamically applies new styles, etc.)
    - Geolocation API
        - Retrieves geographical information (e.g., Google Maps)
    - Canvas and WebGL
        - Allows you to create 2D and 3D animated graphics
    - Audio and video APIs like HTMLMediaElement and WebRTC 
        - Allows you to use multimedia
        - E.g., play audio and video on the webpage, grab video from your web camera, etc.
- Different kinds of third party APIs:
    - Twitter API
        - Allows you to display your latest tweets on your website
    - Google Maps and OpenStreetMap API
        - Allows you to embed custom maps into your website

## Which type of language is JS?
- JavaScript is interpreted -- runs in order, from top to bottom of the code

## async vs. defer
- async
    - downloads the script without blocking the page while the script is being fetched
    - after script download is complete, the script will executing, blocking the page from rendering
    - use this when you want scripts to run immediately, and the scripts in the page run independently of each other and depend on no other scripts on the page
- defer
    - will load in the order they appear on the page
    - won't run until the page content has all loaded
    - useful if your scripts depend on the DOM being in place

## Numbers
- `toFixed(x)`: rounds the answer to `x` decimal places
- `Number(x)`: used to typecast variable `x` to a `Number`

## Strings
- `String(x)`: typecast `x` to `String`
- `x.length`: find length of string `x`
- `x[0]`: retrieves first letter in string, can be used for any character #
- `x[x.length-1]`: retrieves last letter in string
- `x.includes(y)`: returns boolean; if string `x` includes substring `y`
- `x.startsWith(y)`: returns boolean; if string `x` starts with substring `y`
- `x.endsWith(y)`: returns boolean; if string `x` ends with substring `y`
- `x.indexOf(y,[optional] z)`: returns the index of first occurrence of substring `y` in `x`
    - Starts searching at index `z` (optional)
        - If you want to find second occurrence, let `z` be a number greater than the index of the first occurrence
    - Returns `-1` if not in string
- `x.slice(y,[optional] z)`: returns substring of `x` beginning at index `y` and ending at index `z-1`
    - Don't include second parameter if you just want to extract everything after first index
- `x.toLowerCase()`
- `x.toUpperCase()`
- `x.replace(y,z)`: replaces (first occurrence of) portion of `x` equal to `y` with `z`
    - E.g., 
    ```javascript
    x = "mozilla"; rep = x.replace("moz","van"); rep === "vanilla"
    ```
- `x.split(delimiter)`: can pass a string x with a delimiter and turn it into an array
    - E.g., 
    ```javascript
    x = "a,b,c"; arr = x.split(","); arr === ["a","b","c"]
    ```

## Arrays
- `arr.indexOf(item)`: returns index of first occurence of item in `arr`
- `arr.push(item)`: adds item to end of `arr`, returns length of new array
- `arr.unshift(item)`: adds item to start of `arr`
- `arr.pop()`: removes last item in `arr`, returns item that was removed
- `arr.shift()`: removes first item from `arr`
- `arr.splice(index, [opt] num)`: removes `num` number of items from `arr`, starting at index
    ```javascript
    for (const item of arr) {}
        Access every item of arr
    ```
- `arr.map(fun)`: applies the function fun to every item in `arr`.
    - E.g., 
        ```javascript
        function double(num) {
            return num*2;
        } 
        arr = [1,2,3]; 
        doubled = arr.map(double);
        ```
- `arr.filter(fun)`: retuns array for items that pass the filter in `fun`
    - E.g., 
        ```javascript
        function bigger(num) {
            return num > 2;
        } 
        arr = [1,2,3]; 
        bigOnes = arr.filter(bigger);
        ```
- `arr.join(delimiter)`: can join an array together into a string, each item separated by delimiter
    - E.g., 
    ```javascript
    arr = [1,2,3]; joined = arr.join("*"); joined === "1*2*3"
    ```
- `arr.toString()`: joins array together into a string, each item separated by a comma
    - E.g., 
    ```javascript
    arr = [1,2,3]; joined = arr.toString(); joined === "1,2,3"
    ```

### Loops
```javascript
for (const ITEM of ARRAY) {}
```
```javascript
for (initializer; condition; final-expression) {}
```
- `initializer` is a variable set to number that increments whenever the loop runs
- `condition` defines when the loop stops looping
- `final-expression` always runs each time the loop has gone through a full iteration


### Functions vs. Anonymous functions vs. arrow functions
- Function example:
    ```javascript
    function logKey(event) {
        console.log(`You pressed "${event.key}".`);
    }
    textBox.addEventListener("keydown", logkey);
    ```
- Anonymous function equivalent:
    ```javascript
    textBox.addEventListener("keydown", function(event) {
        console.log(`You pressed "${event.key}".`);
    })
    ```        
- Arrow function equivalent:
    ```javascript
    textBox.addEventListener("keydown", (event) => {
        console.log(`You pressed "${event.key}".`);
    }) 
    ```
    or, since it only takes one parameter, you can omit the parentheses
    ```javascript
    textBox.addEventListener("keydown", event => {
        console.log(`You pressed "${event.key}".`);
    }) 
    ```
- If the function only contains one line that's a return statement, you can omit the braces and the return keyword
    ```javascript
    const originals = [1, 2, 3];
    const doubled = originals.map(item => item * 2);
    console.log(doubled); // [2, 4, 6]
    ```

## Events
- `focus`: triggers when the element is focused (e.g., clicking a textbox)
- `blur`: triggers when the element is not focused on
- `click`: triggers when element is clicked on
- `dblclick`: triggers when element is double-clicked on
- `mouseover`: triggers when mouse pointer is hovered over it
- `mouseout`: triggers when mouse pointer moves off element
- `keydown`: triggers when user presses a key
- `play`: only works on videos
    
- Can pass `AbortSignal` to `addEventListener` then later calling `abort()` to the signal
    ```javascript
    const controller = new AbortController();

    btn.addEventListener("click",
        () => { 
            const item = "Something happens";   
        },
        { signal: controller.signal } // pass an AbortSignal to this handler
    );

    controller.abort();
    ```
- Can have more than one call to addEventListener() to an element

### Event objects
- Can be passed to event handlers, and the event handler will target the object where the event happened
- This changes the color of the button:
    ```javascript
    const btn = document.querySelector("button");

    function random(number) {
        return Math.floor(Math.random() * (number + 1));
    }

    function bgChange(e) {
        const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
        e.target.style.backgroundColor = rndCol;
        console.log(e);
    }

    btn.addEventListener("click", bgChange);
    ```
- Keydown events have extra properties:
    ```javascript
    const textBox = document.querySelector("#textBox");
    const output = document.querySelector("#output");
    textBox.addEventListener("keydown", (event) => {
        output.textContent = `You pressed "${event.key}".`;
    });
    ```
    
### Prevent default
- `event.preventDefault()` function prevents the event object from doing its default behavior
    
### Event bubbling 
- If you apply an event handler to a child element, its parent, and its grandparent (say, a button (child) within a div (parent) within a body (grandparent)), clicking the child will cause the child, parent, and grandparent event to fire, in that order
- `stopPropagation()` prevent this behavior (event bubbling)
- E.g.,
    ```javascript
    video.addEventListener("click", (event) => {
    event.stopPropagation();
    video.play();
    });
    ```
    
### Event capture
- Like bubbling, but fires in the opposite direction (grandparent, to parent, to child)
- Needs to be enabled:
    ```javascript
    const output = document.querySelector("#output");
    function handleClick(e) {
    output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
    }

    const container = document.querySelector("#container");
    const button = document.querySelector("button");

    document.body.addEventListener("click", handleClick, { capture: true });
    container.addEventListener("click", handleClick, { capture: true });
    button.addEventListener("click", handleClick);
    ```

## Objects
    General format:
        const objectName = {
            member1Name:    member1Value,
            member2Name:    member2Value,
            member3Name:    member3Value,
        }
    Example:
        const person = {
            name:   ["Bob", "Smith"],
            age:    32,
            bio() {
                    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
            },
            introduceSelf() {
                    console.log(`Hi! I'm ${this.name[0]}.`);
            },
        };
        - name and age are object properties, bio() and introduceSelf() are object methods
        - They're all object members
    Can access with...
        Dot notation, e.g.,
            person.age;
            person.name;
            person.name[0];
            person.bio();
        Bracket notation
            E.g.,
                person["age"];
                person["name"]["first"]
            Bracket notation is helpful when property is in a variable, e.g.,
                const person = {
                    name: ["Bob", "Smith"],
                    age: 32,
                };

                function logProperty(propertyName) {
                    console.log(person[propertyName]);
                }

                logProperty("name");
                // ["Bob", "Smith"]
                logProperty("age");
                // 32
            Bracket notation also helpful to add properties that are variables 
                const dataName = nameInput.value;
                const dataValue = nameValue.value;
                person[dataName] = dataValue;
    Objects can have objects, e.g.,
        const person = {
            name: {
                first:  "Bob",
                last:   "Smith",
            }
        }
    - Can set object members and create new object members 
    Constructors
        - Can be used to create many objects and easily modify properties
        - E.g.,
            function Person(name) {
                this.name = name;
                this.introduceSelf = function () {
                    console.log(`Hi! I'm ${this.name}.`);
                };
            }
            const bob = new Person("Bob");
            bob.name;
            bob.introduceSelf();
    Prototype
        - Every object in JS has a built-in property, its prototype 
        - Prototypes themselves are objects
            - Prototypes themselves have their own prototypes, creating a prototype chain 
            - Chains end when we reach a prototype that has null for its own prototype
        - When you try to access a property of an object
            - If the property can't be found in the object, its prototype is searched for the property
            - If the property can't be found in the object's prototype, the prototype's prototype is searched, and so on, until either the property is found or the end of the chain is reached (and undefined is returned)
        - Can find prototype of an object `myObject` using Object.getPrototypeOf(myObject);
            - Returns an object called Object.prototype, the most basic prototype, and it has a null prototype
        Shadowing a prototype
            - If you define a property that has the same name as a prototype, it uses your definition instead
        Setting a prototype
            - Can use Object.create() method to create a new object with another object as its prototype
            E.g., 
                // the prototype
                const personPrototype = {
                    greet() {
                        console.log("hello!");
                    },
                };

                const carl = Object.create(personPrototype);

                Object.getPrototypeOf(carl); // {greet: f}
            - Can instead use constructor to ensure all objects of that type are given the prototype
            E.g., 
                // the prototype
                const personPrototype = {
                    greet() {
                        console.log(`hello, my name is ${this.name}!`);
                    },
                };

                function Person(name) {
                    this.name = name;
                }

                Object.assign(Person.prototype, personPrototype);
            - Properties set in the constructor are called own properties, as opposed to properties set in prototypes 
                - Often, methods are defined in the prototype and data properties are defined in the construtor 
                - Can find own properties with Object.hasOwn() method
        - Support inheritance !!!!!
    OOP in JavaScript
        - Constructors are like class definitions (but prototypes can be used instead of a constructor)
        - A prototype chain is like a natural way to implement inheritance -- a Student object can have a prototype of a Person object, so it can inherit its properties
            - Except, it's more like delegation
        - In JS, objects are often created without a separate class definition, either using a function or object literal 
    Classes in JavaScript
        - Example of Person class:
            class Person {
                name;

                constructor(name) {
                    this.name = name;
                }

                introduceSelf() {
                    console.log(`Hi! I'm ${this.name}`);
                }
            }
        - Inheritance of Person class
            class Professor extends Person {
                teaches;

                constructor(name, teaches) {
                    super(name);
                    this.teaches = teaches;
                }

                introduceSelf() {
                    console.log(`My name is ${this.name}, and I will be your ${this.teaches} professor.`);
                }

                grade(paper) {
                    const grade = Math.floor(Math.random() * (5 - 1) + 1);
                    console.log(grade);
                }
            }
        - Encapsulation allows certain properties of be private
            class Student extends Person {
                #year;

                constructor(name, year) {
                    super(name);
                    this.#year = year;
                }

                introduceSelf() {
                    console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`);
                }

                canStudyArchery() {
                    return this.#year > 1;
                }
            }
            const summers = new Student("Summers", 2);
            summers.#year; // SyntaxError
        - Methods can also be private
            class Example {
                somePublicMethod() {
                    this.#somePrivateMethod();
                }

                #somePrivateMethod() {
                    console.log("You called me?");
                }
            }
            const myExample = new Example();
            myExample.somePublicMethod(); // 'You called me?'
            myExample.#somePrivateMethod(); // SyntaxError

JSON
    - JSON is a string whose format is similar to a JavaScript object literal
    E.g., 
        {
            "squadName": "Super hero squad",
            "homeTown": "Metro City",
            "formed": 2016,
            "secretBase": "Super tower",
            "active": true,
            "members": [
                {
                "name": "Molecule Man",
                "age": 29,
                "secretIdentity": "Dan Jukes",
                "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
                },
                {
                "name": "Madame Uppercut",
                "age": 39,
                "secretIdentity": "Jane Wilson",
                "powers": [
                    "Million tonne punch",
                    "Damage resistance",
                    "Superhuman reflexes"
                ]
                },
                {
                "name": "Eternal Flame",
                "age": 1000000,
                "secretIdentity": "Unknown",
                "powers": [
                    "Immortality",
                    "Heat Immunity",
                    "Inferno",
                    "Teleportation",
                    "Interdimensional travel"
                ]
                }
            ]
        }
        superHeroes.homeTown;
        superHeroes["active"];
        superHeroes["members"][1]["powers"][2];
    - They can also be arrays 
        [
            {
                "name": "Molecule Man",
                "age": 29,
                "secretIdentity": "Dan Jukes",
                "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
            },
            {
                "name": "Madame Uppercut",
                "age": 39,
                "secretIdentity": "Jane Wilson",
                "powers": [
                "Million tonne punch",
                "Damage resistance",
                "Superhuman reflexes"
                ]
            }
        ]
        [0]["powers"][0]
    - Sometimes we need to convert from JSON string to JavaScript object and vice-versa
        - parse(): Accepts a JSON string as a parameter, and returns the corresponding JavaScript object.
            E.g.,
            async function populate() {
                const requestURL =
                    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
                const request = new Request(requestURL);

                const response = await fetch(request);
                const superHeroesText = await response.text();

                const superHeroes = JSON.parse(superHeroesText);
                populateHeader(superHeroes);
                populateHeroes(superHeroes);
            }
        - stringify(): Accepts an object as a parameter, and returns the equivalent JSON string.
            E.g.,
            let myObj = { name: "Chris", age: 38 };
            myObj;
            let myString = JSON.stringify(myObj);
            myString;

Async JavaScript

    What is async JavaScript?
        - Technique that enables your program to start a potentially long-running task while still being responsive to other events while the task runs
        - Examples:
            - Making HTTP requests with fetch()
            - Accessing the user's camera or mic with getUserMedia()
            - Asking user to select files with showOpenFilePicker()
        - Can use event handlers for this 
        - Event handlers are a type of callback, which is a function that's passed into another function, with the expectation that the callback will be called at the appropriate time
            - But they're had to understand and debug, so Promises are used instead 
    
    Promises
        - Is an object returned by an async function that represents the current state of the operation
        - When the promise is returned, the operation often isn't finished, but the promise object has methods to hand the eventual success/failure of operation 
        - Promises can be in one of three states: 
            - Pending: promise has been created, and the async function it's associated with hasn't succeeded or failed yet; this is the state of the promise when it's returned from a call to fetch() and the request is still being made 
            - Fulfilled: the async function has succeeded, so the then() handler is called 
            - Rejected: the async function has failed, so the catch() handler is called 
        - E.g., 
            const fetchPromise = fetch(
                "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
            );

            console.log(fetchPromise);

            fetchPromise.then((response) => {
                console.log(`Received response: ${response.status}`);
            });

            console.log("Started request…");
        - Chaining promises, "intuitive" example 
            const fetchPromise = fetch(
                "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
            );
            fetchPromise.then((response) => {
                const jsonPromise = response.json();
                jsonPromise.then((data) => {
                    console.log(data[0].name);
                });
            });
        - Chaining promises, now clean
            const fetchPromise = fetch(
                "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
            );

            fetchPromise
                .then((response) => response.json())
                .then((data) => {
                    console.log(data[0].name);
                });
        - Chaining promises, considering status
            const fetchPromise = fetch(
                "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
            );

            fetchPromise
                .then((response) => {
                    if (!response.ok) {
                    throw new Error(`HTTP error: ${response.status}`);
                    }
                    return response.json();
                })
                .then((data) => {
                    console.log(data[0].name);
                });
        - Chaining promises, with catch()
            const fetchPromise = fetch(
            "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
            );

            fetchPromise
                .then((response) => {
                    if (!response.ok) {
                    throw new Error(`HTTP error: ${response.status}`);
                    }
                    return response.json();
                })
                .then((data) => {
                    console.log(data[0].name);
                })
                .catch((error) => {
                    console.error(`Could not get products: ${error}`);
                });
        - If you want all promises to be fulfilled, but they don't depend on each other...
            - Start them all off together, then be notified when they're all fulfilled with Promise.all()
            - Promise.all() takes array of promises and returns a single promise 
            - This promise is fulfilled when and if all the promises in the array are fulfilled; calls the then() handler with the array of promises, in the same order
            - This promise is rejected when and if any promises in the array are rejected; calls the catch() handler with the error thrown by the promise that rejected 
            - E.g.,
                const fetchPromise1 = fetch(
                    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
                );
                const fetchPromise2 = fetch(
                    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
                );
                const fetchPromise3 = fetch(
                    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
                );

                Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
                    .then((responses) => {
                        for (const response of responses) {
                        console.log(`${response.url}: ${response.status}`);
                        }
                    })
                    .catch((error) => {
                        console.error(`Failed to fetch: ${error}`);
                    });
        - If you want any promise to be fulfilled from a set, use Promise.any()
        - The Promise constructor
            - Example:
                function alarm(person, delay) {
                    // takes a single function as argument, called an "executor"
                    return new Promise((resolve, reject) => {
                        // executor takes two arguments, resolve and reject 
                        if (delay < 0) {
                        throw new Error("Alarm delay must not be negative");
                        }
                        // executor calls an async function 
                        setTimeout(() => {
                        resolve(`Wake up, ${person}!`); // call resolve if succeeds, and reject otherwise
                        }, delay);
                    });
                }
    async and await keywords
        - Adding `async` to the start of a function makes it an async function
        - You can use the `await` keyword before a call to a function that returns a promise; this makes the code wait at the point until the promise is settled, so the settled value of the promise is returned (or thrown)
        - Can't use `await` keyword outside of async function 
        - Using previous example:
            async function fetchProducts() {
                try {
                    // after this line, our function will wait for the `fetch()` call to be settled
                    // the `fetch()` call will either return a Response or throw an error
                    const response = await fetch(
                        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
                    );
                    if (!response.ok) {
                        throw new Error(`HTTP error: ${response.status}`);
                    }
                    // after this line, our function will wait for the `response.json()` call to be settled
                    // the `response.json()` call will either return the parsed JSON object or throw an error
                    const data = await response.json();
                    console.log(data[0].name);
                } catch (error) {
                    console.error(`Could not get products: ${error}`);
                }
            }
        - async functions only return promises -- to return something, it would need to look like 
            async function fetchProducts() {
                try {
                    const response = await fetch(
                    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
                    );
                    if (!response.ok) {
                    throw new Error(`HTTP error: ${response.status}`);
                    }
                    const data = await response.json();
                    return data;
                } catch (error) {
                    console.error(`Could not get products: ${error}`);
                }
            }
            const promise = fetchProducts();
            promise.then((data) => console.log(data[0].name));
    Workers
        - Workers can run tasks in a different thread
        - To avoid race conditions, the main code and worker code are never given direct access to each other variables, and can only "share" data in very specific cases
        - Types of workers:
            - Dedicated workers: used by a single script instance
            - Shared workers: can be shared by several different scripts running in different windows
            - Service workers: act like proxy servers, caching resource so that web applications can work when the user is offline

APIs
    - Types of APIs
        - Browser APIs: built into web browser and can expose data from browser and surrounding computer environment
        - Third-party APIs: not built into browser by default -- need to retrieve their code and info from somewhere on the web 
    - JavaScript libraries vs. frameworks
        - JavaScript library: one or more JS files containing custom functions that you can attach to your web page to speed up or enable writing common functionality 
            - E.g., jQuery, Mootols, React
        - JavaScript framework: tend to be packages of HTML, CSS, JS and other technologies that can be used to write a web application from scratch 
        - Library vs. framework?
            - Inversion control...
                - When calling a method from a library, the developer is in control
                - With a framework, the framework calls the developer's code
    - What can browser APIs do?
        - Manipulate documents loaded into the browser (DOM API)
        - Fetch data from the server to update the webpage 
        - Draw or manipulate graphics
        - Audio and video 
        - Allow you to interact with device hardware with device APIs 
        - Can store data on client-side with client-side storage APIs 
    - What can third-party APIs do?
        - Twitter, Google Maps, Facebook, Telegram, YouTube, etc. 
    Manipulating documents
        - `Window` object: the browser tab that the web page is loaded into 
            - Can manipulate the document loaded into the widnow, storage data on client side, etc.
        - `Navigator` object: the state and identity of the browser (i.e., the user agent)
            - Can retrieve user's pref language, media stream from the user's webcame, etc. 
        - `Document` object: the actual page loaded into the window 
            - Can manipulate info on the HTML and CSS, get a referencce to an element in the DOM, change text content, apply styles, etc.
        - Document.querySelector() will match with the first specified element found
        - Document.querySelectorAll() will match with every specified element found and store them in a array-like object called NodeList 
    Using Canvas
        - beginPath(): start drawing path at the point where the pen currently is on the canvas, starting out at (0,0)
        - moveTo(): move the pen to a different point on the canvas without tracing the line 
        - fill(): draw a filled shape by filling in the path you've traced so far 
        - stroke(): draw an outline shape by drawing a stroke along the path you've drawn so far 
        - General process of canvas animation: 
            1. Clear the canvas contents (e.g. with fillRect() or clearRect()).
            2. Save state (if necessary) using save() — this is needed when you want to save settings you've updated on the canvas before continuing, which is useful for more advanced applications.
            3. Draw the graphics you are animating.
            4. Restore the settings you saved in step 2, using restore()
            5. Call requestAnimationFrame() to schedule drawing of the next frame of the animation.
    Client-side storage
        - Cookies can be used, more commonely for user personalization and state (e.g., session IDs and access tokens)
        - Web Storage API is used for storing/retrieving smaller data items consisting of a name and corresponding value, useful for storing simple data 
        - IndexedDB API provides the browser with a complete DB system for storing complex data
        - Cache API designed for storing HTTP responses to specific requests, also usefil for storing website assets offline
        Web Storage API
            - All web storage data is contained within two object-like structures inside the browser:
                - sessionStorage: persists data for as long as the browser is open (data lost when browser closed)
                - localStorage: persists data even after browser is closed then opened again 
                    Set item example:
                        localStorage.setItem("name","Lee");
                        let myName = localStorage.getItem("name");
                        myName; // Lee
                    Remove item example:
                        localStorage.removeItem("name");
                        myName = localStorage.getItem("name");
                        myName; // null
                        